namespace coffe_poject.Models;

public class Order
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public User User { get; set; } = null!;
    
    public string Status { get; set; } = "Pending";
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
}
