using System;
using System.ComponentModel.DataAnnotations;

namespace DtoModels.Requests
{
    public class RegisterModel
    {
        [Required(ErrorMessage = "User Name is required")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Display Name is required")]
        public string DisplayName { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }
    }
}
