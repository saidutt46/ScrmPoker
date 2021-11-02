using System;
using DtoModels.Dto;

namespace DtoModels.Response
{
    public class LoginResponse
    {
        public string Token { get; set; }
        public DateTime Expiration { get; set; }
        public UserProfileDto UserProfile { get; set; }
    }
}
