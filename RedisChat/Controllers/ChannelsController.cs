using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace RedisChat.Controllers;

[ApiController]
[Authorize]
[Route("[controller]")]
public class ChannelsController : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> Get()
    {
        return new JsonResult(new {Channels= new []{"channel-1", "channel-2"}});
    }
}