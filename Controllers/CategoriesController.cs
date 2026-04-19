using Microsoft.AspNetCore.Mvc;
using coffe_poject.Models;
using coffe_poject.Repositories;
using coffe_poject.DTOs;

namespace coffe_poject.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CategoriesController : ControllerBase
{
    private readonly IRepository<Category> _categoryRepository;

    public CategoriesController(IRepository<Category> categoryRepository)
    {
        _categoryRepository = categoryRepository;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<CategoryResponseDto>>> GetCategories()
    {
        var categories = await _categoryRepository.GetAllAsync();
        return Ok(categories.Select(c => new CategoryResponseDto { Id = c.Id, Name = c.Name }));
    }
}
