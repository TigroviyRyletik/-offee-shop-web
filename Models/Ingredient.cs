namespace coffe_poject.Models;

public class Ingredient
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;

    public ICollection<ProductIngredient> ProductIngredients { get; set; } = new List<ProductIngredient>();
}
