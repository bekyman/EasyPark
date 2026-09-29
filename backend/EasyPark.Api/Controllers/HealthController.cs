using Microsoft.AspNetCore.Mvc;

namespace EasyPark.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HealthController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new
        {
            status = "OK",
            message = "EasyPark API is running"
        });
    }
}