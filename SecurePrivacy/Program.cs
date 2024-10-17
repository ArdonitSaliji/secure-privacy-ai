using MongoDB.Driver;
using SecurePrivacy.Configuration;
using SecurePrivacy.Data;
using SecurePrivacy.Entities;
using SecurePrivacy.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins",
        builder => builder.WithOrigins("*") // Specify your allowed origin
                          .AllowAnyMethod()
                          .AllowAnyHeader());
});


builder.Services.AddControllers();

builder.Services.Configure<MongoDbSettings>(builder.Configuration.GetSection("MongoDbSettings"));
builder.Services.AddSingleton<MongoDbContext>();
builder.Services.AddSingleton<ProductService>();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

await SeedDatabase(app.Services);

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowAllOrigins");
app.UseAuthorization();
app.MapControllers();
app.Run();

// Method to seed the database
static async Task SeedDatabase(IServiceProvider services)
{
    // Create a scope to get the MongoDbContext
    using var scope = services.CreateScope();
    var dbContext = scope.ServiceProvider.GetRequiredService<MongoDbContext>();

    // Check if there are already products to avoid duplicating seed data
    if (await dbContext.Products.CountDocumentsAsync(FilterDefinition<Product>.Empty) == 0)
    {
        // Generate dummy data
        var products = DummyDataGenerator.GenerateDummyProducts(10); // Generate 10 dummy products

        // Insert the dummy data into the database
        await dbContext.Products.InsertManyAsync(products);
    }
}
