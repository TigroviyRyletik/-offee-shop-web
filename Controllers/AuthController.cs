using Microsoft.AspNetCore.Mvc;

namespace coffe_poject.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    [HttpPost("login")]
    public IActionResult Login()
    {
        // MVP: Заглушка авторизации
        return Ok(new { Token = "mock_jwt_token", Message = "В будущем здесь будет реальная генерация JWT-токена." });
    }
}
