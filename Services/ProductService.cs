using coffe_poject.Models;
using coffe_poject.DTOs;
using coffe_poject.Repositories;

namespace coffe_poject.Services;

public interface IProductService
{
    Task<IEnumerable<ProductResponseDto>> GetAllAsync();
    Task<ProductResponseDto?> GetByIdAsync(int id);
}

public class ProductService : IProductService
{
    private readonly IRepository<Product> _productRepository;

    public ProductService(IRepository<Product> productRepository)
    {
        _productRepository = productRepository;
    }

    public async Task<IEnumerable<ProductResponseDto>> GetAllAsync()
    {
        var products = await _productRepository.GetAllAsync();
        return products.Select(p => new ProductResponseDto
        {
            Id = p.Id,
            Name = p.Name,
            Description = p.Description,
            Price = p.Price,
            ImageUrl = p.ImageUrl
        });
    }

    public async Task<ProductResponseDto?> GetByIdAsync(int id)
    {
        var p = await _productRepository.GetByIdAsync(id);
        if (p == null) return null;

        return new ProductResponseDto
        {
            Id = p.Id,
            Name = p.Name,
            Description = p.Description,
            Price = p.Price,
            ImageUrl = p.ImageUrl
        };
    }
}
