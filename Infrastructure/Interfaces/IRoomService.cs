using System;
using System.Threading.Tasks;
using Domain.Entities;
using DtoModels.Requests;
using DtoModels.Shared;

namespace Infrastructure.Interfaces
{
    public interface IRoomService
    {
        Task<BaseDtoListResponse<Room>> ListAsync();
        Task<BaseDtoResponse<Room>> GetById(Guid id);
        Task<BaseDtoResponse<Room>> Add(CreateRoomRequest request);
        Task<BaseDtoResponse<Room>> Delete(Guid id);
        Task<BaseDtoResponse<Room>> Update(Guid id, Room room);
    }
}
