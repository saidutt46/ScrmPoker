using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Domain.Entities
{
    public class Room : BaseEntity
    {
        [Required]
        public string Name { get; set; }
        public string TagLine { get; set; }

        public virtual ICollection<ApplicationUser> Users { get; set; }
    }
}
