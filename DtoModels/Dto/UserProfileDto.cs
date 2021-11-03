using System;
using Domain.Entities;

namespace DtoModels.Dto
{
    public class UserProfileDto
    {
        public Guid Id { get; set; }
        public string UserName { get; set; }
        public string DisplayName { get; set; }
        public string ConnectionId { get; set; }
        public bool IsHost { get; set; }
    }

    public class UserProfileInGame : UserProfileDto
    {
        public Guid RoomId { get; set; }
    }
}
