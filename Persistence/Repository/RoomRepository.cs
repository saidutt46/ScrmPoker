using System;
using Domain.Entities;
using Persistence.Context;
using Persistence.Interfaces;
using Persistence.Shared;

namespace Persistence.Repository
{
    public class RoomRepository : EfRepository<Room>, IRoomRepository
    {
        public RoomRepository(ScrumPokerContext options) : base(options)
        {
        }
    }
}
