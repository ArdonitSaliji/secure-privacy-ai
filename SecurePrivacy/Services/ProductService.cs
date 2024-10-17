using SecurePrivacy.Data;
using SecurePrivacy.Entities;
using MongoDB.Driver;

namespace SecurePrivacy.Services
{
    public class ProductService
    {
        private readonly MongoDbContext _context;

        public ProductService(MongoDbContext context)
        {
            _context = context;
        }

        // Get all products
        public async Task<List<Product>> GetAllProductsAsync()
        {
            return await _context.Products
                .Find(p => p.DeletedAt == null)
                .ToListAsync();
        }

        // Get product by ID
        public async Task<Product?> GetProductByIdAsync(string id)
        {
            // Fetch a product by ID from MongoDB where it is not deleted
            return await _context.Products
                .Find(p => p.Id == id && p.DeletedAt == null)
                .FirstOrDefaultAsync();
        }
        public async Task<Product> InsertProductAsync(Product product)
        {
            // Insert product into MongoDB
            product.Id = null;
            product.DeletedAt = null;
            product.CreatedAt = DateTime.UtcNow;
            await _context.Products.InsertOneAsync(product);
            return product;
        }

        public async Task<List<Product>> SearchProductsAsync(string searchTerm)
        {
            if (string.IsNullOrWhiteSpace(searchTerm))
            {
                return [];
            }

            // Define a filter to search by name or description
            var filter = Builders<Product>.Filter.And(
                Builders<Product>.Filter.Where(p => p.DeletedAt == null), // Ensure product is not deleted
                Builders<Product>.Filter.Or(
                    Builders<Product>.Filter.Regex(p => p.Name, new MongoDB.Bson.BsonRegularExpression(searchTerm, "i")), // Case-insensitive search
                    Builders<Product>.Filter.Regex(p => p.Description, new MongoDB.Bson.BsonRegularExpression(searchTerm, "i")) // Case-insensitive search
                )
            );

            return await _context.Products.Find(filter).ToListAsync();
        }
    }

}
