using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RedisChat.Model;

namespace RedisChat.Controllers;

[ApiController]
[Route("[controller]")]
[Authorize]
public class MessagesController : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> Get([FromQuery] string channelName)
    {
        var message1 = new Message
        {
            Id = 1,
            Timestamp = DateTime.Now.Subtract(TimeSpan.FromMinutes(5)),
            MessageText = $"I am your first message in {channelName}", SenderName = "foo"
        };
        
        var message2 = new Message
        {
            Id = 2,
            Timestamp = DateTime.Now.Subtract(TimeSpan.FromMinutes(3)),
            MessageText = $"I am your second message in {channelName}", SenderName = "foo"
        };

        return new JsonResult(new {Messages = new[] {message1, message2}});
    }
}