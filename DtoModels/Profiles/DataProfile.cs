using System;
using AutoMapper;
using Domain.Entities;
using DtoModels.Dto;
using DtoModels.Requests;

namespace DtoModels.Profiles
{
    public class DataProfile : Profile
    {
        public DataProfile()
        {
            CreateMap<ApplicationUser, UserProfileDto>();
            CreateMap<CreateRoomRequest, Room>();
        }
    }
}
