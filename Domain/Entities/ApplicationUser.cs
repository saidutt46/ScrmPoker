using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace Domain.Entities
{
    public class ApplicationUser : IdentityUser<Guid>
    {
        [Required]
        public string DisplayName { get; set; }
        public string ConnectionId { get; set; }
        public string RoomId { get; set; }
        public bool IsHost { get; set; }
        public int? CurrentCardId { get; set; }
    }

    public class Role : IdentityRole<Guid> { }
}
