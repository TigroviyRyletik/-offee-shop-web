using Microsoft.AspNetCore.Mvc;
using coffe_poject.Services;
using coffe_poject.DTOs;

namespace coffe_poject.Controllers;

[ApiController]
[Route("api/[controller]")]
public class OrdersController : ControllerBase
{
    private readonly IOrderService _orderService;

    public OrdersController(IOrderService orderService)
    {
        _orderService = orderService;
    }

    [HttpPost]
    public async Task<IActionResult> CreateOrder([FromBody] OrderCreateDto dto)
    {
        var order = await _orderService.CreateOrderAsync(dto);
        return CreatedAtAction(nameof(GetOrder), new { id = order.Id }, order);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetOrder(int id)
    {
        var order = await _orderService.GetOrderByIdAsync(id);
        if (order == null) return NotFound();
        return Ok(order);
    }

    [HttpGet]
    public async Task<IActionResult> GetOrders()
    {
        // В реальном проекте здесь будет проверка прав администратора
        var orders = await _orderService.GetAllOrdersAsync();
        return Ok(orders);
    }
}
