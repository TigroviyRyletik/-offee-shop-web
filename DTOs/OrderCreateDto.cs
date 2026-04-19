using System.ComponentModel.DataAnnotations;

namespace coffe_poject.DTOs;

public class OrderCreateDto
{
    public int UserId { get; set; }
    
    [MinLength(1, ErrorMessage = "Заказ должен содержать хотя бы один товар")]
    public List<OrderItemDto> Items { get; set; } = new();
}

public class OrderItemDto
{
    public int ProductId { get; set; }
    public int Quantity { get; set; }
}
