using Microsoft.Extensions.Options;
using MongoDB.Driver;
using SecurePrivacy.Configuration;
using SecurePrivacy.Entities;

namespace SecurePrivacy.Data
{
    public class MongoDbContext
    {
        private readonly IMongoDatabase _database;

        public MongoDbContext(IOptions<MongoDbSettings> options)
        {
            var client = new MongoClient(options.Value.ConnectionString);
            _database = client.GetDatabase(options.Value.DatabaseName);

            var indexKeys = Builders<Product>.IndexKeys
                .Ascending(p => p.Name)
                .Ascending(p => p.Description);

            var indexModel = new CreateIndexModel<Product>(indexKeys);
            Products.Indexes.CreateOne(indexModel);
        }

        // Add your collections as properties here
        public IMongoCollection<Product> Products => _database.GetCollection<Product>("Products");
    }
}
