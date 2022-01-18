using Redis.OM.Modeling;

namespace RedisChat.Model;

[Document]
public class Message
{
    [RedisIdField] public int Id { get; set; }
    
    [Searchable]
    public string SenderName { get; set; }
    
    [Searchable]
    public string MessageText { get; set; }

    public DateTime Timestamp { get; set; }
}