namespace coffe_poject.Models;

public class User
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public string Role { get; set; } = "Client"; // Admin / Client
    
    public ICollection<Order> Orders { get; set; } = new List<Order>();
    public ICollection<Message> Messages { get; set; } = new List<Message>();
}
