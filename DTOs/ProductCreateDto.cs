using System.ComponentModel.DataAnnotations;

namespace coffe_poject.DTOs;

public class ProductCreateDto
{
    [Required(ErrorMessage = "Наименование обязательно для заполнения")]
    [StringLength(100, ErrorMessage = "Длина наименования не должна превышать 100 символов")]
    public string Name { get; set; } = string.Empty;

    [StringLength(500, ErrorMessage = "Длина описания не должна превышать 500 символов")]
    public string Description { get; set; } = string.Empty;

    [Range(0.01, 1000000.0, ErrorMessage = "Цена должна быть больше нуля")]
    public decimal Price { get; set; }
}
