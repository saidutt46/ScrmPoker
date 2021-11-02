using System;
using AutoMapper;
using Domain.Entities;
using DtoModels.Dto;

namespace DtoModels.Profiles
{
    public class DataProfile : Profile
    {
        public DataProfile()
        {
            CreateMap<ApplicationUser, UserProfileDto>();
        }
    }
}
