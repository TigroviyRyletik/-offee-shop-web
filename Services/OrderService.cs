using coffe_poject.Models;
using coffe_poject.DTOs;
using coffe_poject.Repositories;

namespace coffe_poject.Services;

public interface IOrderService
{
    Task<Order> CreateOrderAsync(OrderCreateDto dto);
    Task<Order?> GetOrderByIdAsync(int id);
    Task<IEnumerable<Order>> GetAllOrdersAsync();
}

public class OrderService : IOrderService
{
    private readonly IRepository<Order> _orderRepository;
    private readonly IRepository<Product> _productRepository;

    public OrderService(IRepository<Order> orderRepository, IRepository<Product> productRepository)
    {
        _orderRepository = orderRepository;
        _productRepository = productRepository;
    }

    public async Task<Order> CreateOrderAsync(OrderCreateDto dto)
    {
        var order = new Order
        {
            UserId = dto.UserId,
            Status = "Pending",
            CreatedAt = DateTime.UtcNow
        };

        foreach (var item in dto.Items)
        {
            var product = await _productRepository.GetByIdAsync(item.ProductId);
            if (product != null)
            {
                order.OrderItems.Add(new OrderItem
                {
                    ProductId = product.Id,
                    Quantity = item.Quantity,
                    PriceAtMoment = product.Price
                });
            }
        }

        await _orderRepository.AddAsync(order);
        await _orderRepository.SaveChangesAsync();
        return order;
    }

    public async Task<Order?> GetOrderByIdAsync(int id)
    {
        return await _orderRepository.GetByIdAsync(id);
    }

    public async Task<IEnumerable<Order>> GetAllOrdersAsync()
    {
        return await _orderRepository.GetAllAsync();
    }
}
