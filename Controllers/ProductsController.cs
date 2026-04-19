using Microsoft.AspNetCore.Mvc;
using coffe_poject.Services;
using coffe_poject.DTOs;

namespace coffe_poject.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IProductService _productService;

    public ProductsController(IProductService productService)
    {
        _productService = productService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ProductResponseDto>>> GetProducts()
    {
        var products = await _productService.GetAllAsync();
        return Ok(products);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ProductResponseDto>> GetProduct(int id)
    {
        var product = await _productService.GetByIdAsync(id);
        if (product == null)
            return NotFound();
            
        return Ok(product);
    }
}
