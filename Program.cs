using Microsoft.EntityFrameworkCore;
using coffe_poject.Data;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddScoped(typeof(coffe_poject.Repositories.IRepository<>), typeof(coffe_poject.Repositories.Repository<>));
builder.Services.AddScoped<coffe_poject.Services.IProductService, coffe_poject.Services.ProductService>();
builder.Services.AddScoped<coffe_poject.Services.IOrderService, coffe_poject.Services.OrderService>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy =>
        {
            policy.WithOrigins("http://localhost:3000")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

var app = builder.Build();

// Автоматическое добавление тестовых товаров, если база пустая
using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<coffe_poject.Data.AppDbContext>();
    if (!context.Products.Any())
    {
        var category = new coffe_poject.Models.Category { Name = "Кава" };
        var dessertCategory = new coffe_poject.Models.Category { Name = "Десерти" };
        var coldCategory = new coffe_poject.Models.Category { Name = "Холодні напої" };
        context.Categories.AddRange(category, dessertCategory, coldCategory);
        context.SaveChanges();

        context.Products.AddRange(
            new coffe_poject.Models.Product { Name = "Капучино", Description = "Класичний капучино зі щільною молочною пінкою та глибоким смаком еспресо.", Price = 250, CategoryId = category.Id, ImageUrl = "/images/cappuccino.png" },
            new coffe_poject.Models.Product { Name = "Флет Вайт", Description = "Насичений кавовий смак з тонким шаром мікропінки.", Price = 270, CategoryId = category.Id, ImageUrl = "/images/flat_white.png" },
            new coffe_poject.Models.Product { Name = "Американо", Description = "Міцна чорна кава для справжніх поціновувачів класики.", Price = 180, CategoryId = category.Id, ImageUrl = "/images/americano.png" },
            new coffe_poject.Models.Product { Name = "Карамельний Раф", Description = "Ніжний вершковий напій на основі еспресо з додаванням карамельного сиропу.", Price = 320, CategoryId = category.Id, ImageUrl = "/images/caramel_raf.png" },
            new coffe_poject.Models.Product { Name = "Матча Лате", Description = "Корисний японський зелений чай з м'яким молочним смаком.", Price = 300, CategoryId = category.Id, ImageUrl = "/images/matcha_latte.png" },
            new coffe_poject.Models.Product { Name = "Еспресо Тонік", Description = "Освіжаючий літній хіт з яскравою кислинкою та бульбашками.", Price = 230, CategoryId = coldCategory.Id, ImageUrl = "/images/espresso_tonic.png" },
            new coffe_poject.Models.Product { Name = "Цитрусовий Лимонад", Description = "Прохолодний авторський лимонад зі свіжими апельсинами та м'ятою.", Price = 210, CategoryId = coldCategory.Id, ImageUrl = "/images/citrus_lemonade.png" },
            new coffe_poject.Models.Product { Name = "Нью-Йорк Чизкейк", Description = "Той самий оригінальний смак з ніжною текстурою.", Price = 290, CategoryId = dessertCategory.Id, ImageUrl = "/images/cheesecake.png" },
            new coffe_poject.Models.Product { Name = "Круасан з мигдалем", Description = "Свіжоспечений хрусткий круасан з мигдальними пластівцями та пудрою.", Price = 190, CategoryId = dessertCategory.Id, ImageUrl = "/images/almond_croissant.png" },
            new coffe_poject.Models.Product { Name = "Макарон (Набір)", Description = "Ніжні французькі тістечка з різними смаками.", Price = 240, CategoryId = dessertCategory.Id, ImageUrl = "/images/macarons.png" }
        );
        context.SaveChanges();
    }
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseCors("AllowFrontend");

app.UseAuthorization();

app.MapControllers();

app.Run();
