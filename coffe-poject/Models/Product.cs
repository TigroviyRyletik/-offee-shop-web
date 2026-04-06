namespace coffe_poject.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty; // Хорошая практика — инициализировать строки
        public string Description { get; set; } = string.Empty;
        public decimal Price { get; set; }
    }
}