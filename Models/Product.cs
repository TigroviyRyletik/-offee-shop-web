namespace coffe_poject.Models;

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public string ImageUrl { get; set; } = string.Empty;

    public int CategoryId { get; set; }
    public Category Category { get; set; } = null!;

    public ICollection<ProductIngredient> ProductIngredients { get; set; } = new List<ProductIngredient>();
    public ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
}