namespace coffe_poject.Models;

public class Message
{
    public int Id { get; set; }
    
    public int UserId { get; set; }
    public User User { get; set; } = null!;

    public string Text { get; set; } = string.Empty;
    public bool IsFromAdmin { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
