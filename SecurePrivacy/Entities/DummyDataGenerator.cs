namespace SecurePrivacy.Entities
{
    public class DummyDataGenerator
    {
        public static List<Product> GenerateDummyProducts(int count)
        {
            var products = new List<Product>();

            for (int i = 1; i <= count; i++)
            {
                products.Add(new Product
                {
                    Name = $"Product {i}",
                    Price = (decimal)Math.Round(new Random().NextDouble() * 100, 2), // Random price between 0.00 and 100.00
                    Description = $"Description for Product {i}. This is a sample description.",
                    CreatedAt = DateTime.UtcNow.AddDays(-new Random().Next(0, 30)), // Created within the last 30 days
                    IsAvailable = i % 2 == 0 // Alternate availability
                });
            }

            return products;
        }

    }


}
