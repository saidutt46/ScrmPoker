using System;
using DtoModels.Dto;

namespace DtoModels.Requests
{
    public class JoinRoomRequest
    {
        public Guid RoomId { get; set; }
        public Guid UserId { get; set; }
    }
}
