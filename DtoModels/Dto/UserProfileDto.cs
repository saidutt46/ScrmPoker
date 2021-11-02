using System;
namespace DtoModels.Dto
{
    public class UserProfileDto
    {
        public Guid Id { get; set; }
        public string UserName { get; set; }
        public string DisplayName { get; set; }
        public string ConnectionId { get; set; }
        public string RoomId { get; set; }
        public bool IsHost { get; set; }
        public int? CurrentCardId { get; set; }
    }
}
