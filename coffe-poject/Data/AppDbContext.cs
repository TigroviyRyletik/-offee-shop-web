using Microsoft.EntityFrameworkCore;
using coffe_poject.Data;
using coffe_poject.Models;

namespace coffe_poject.Data;

public class AppDbContext : DbContext
{
    public DbSet<Product> Products { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }
}
