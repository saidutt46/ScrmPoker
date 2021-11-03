using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Domain.Entities;
using DtoModels.Requests;
using DtoModels.Shared;
using Infrastructure.Interfaces;
using Persistence.Interfaces;

namespace Infrastructure.Services
{
    public class RoomService : IRoomService
    {
        private readonly IMapper _mapper;
        private readonly IRoomRepository _roomRepository;

        public RoomService(IMapper mapper, IRoomRepository roomRepository)
        {
            _mapper = mapper;
            _roomRepository = roomRepository;
        }

        public async Task<BaseDtoListResponse<Room>> ListAsync()
        {
            try
            {
                IList<Room> rooms = await _roomRepository.ListAll();
                if (rooms != null)
                {
                    BaseDtoListResponse<Room> response = new(rooms);
                    return response;
                }
                else
                {
                    return new BaseDtoListResponse<Room>("No Rooms found!");
                }
            }
            catch (Exception ex)
            {
                return new BaseDtoListResponse<Room>(ex.Message);
            }
        }

        public async Task<BaseDtoResponse<Room>> GetById(Guid id)
        {
            Room room = await _roomRepository.GetById(id);

            if (room == null)
                return new BaseDtoResponse<Room>("Room Not Found");
            return new BaseDtoResponse<Room>(room);
        }

        public async Task<BaseDtoResponse<Room>> Add(CreateRoomRequest request)
        {
            try
            {
                Room model = _mapper.Map<CreateRoomRequest, Room>(request);
                Room room = await _roomRepository.Add(model);
                if (room != null)
                {
                    return new BaseDtoResponse<Room>(room);
                }
                else
                {
                    return new BaseDtoResponse<Room>("Unable to create a new room, try again");
                }
            }
            catch (Exception ex)
            {
                return new BaseDtoResponse<Room>($"An error occurred when creating the room: {ex.Message}");
            }
        }

        public async Task<BaseDtoResponse<Room>> Delete(Guid id)
        {
            try
            {
                Room room = await _roomRepository.GetById(id);
                if (room != null)
                {
                    await _roomRepository.Delete(room);
                    return new BaseDtoResponse<Room>(room);

                }
                else
                {
                    return new BaseDtoResponse<Room>("Unable to delete: Room Not found");
                }
            }
            catch (Exception ex)
            {
                return new BaseDtoResponse<Room>($"An error occurred when deleting the room: {ex.Message}");
            }
        }
    }
}
