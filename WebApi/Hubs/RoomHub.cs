using System;
using System.Threading.Tasks;
using Domain.Entities;
using DtoModels.Requests;
using Infrastructure.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;
using Persistence.Context;

namespace WebApi.Hubs
{
    public class RoomHub : Hub
    {
        private readonly ScrumPokerContext _context;
        private readonly IRoomService _roomService;
        private readonly UserManager<ApplicationUser> _userManager;
        public RoomHub(ScrumPokerContext context, IRoomService roomService ,UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _roomService = roomService;
            _userManager = userManager;
        }

        public async Task JoinRoom(JoinRoomRequest request)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, request.RoomId.ToString());
            ApplicationUser user = await _userManager.FindByIdAsync(request.UserId.ToString());
            user.ConnectionId = Context.ConnectionId;
            var room = await _roomService.GetById(request.RoomId);
            room.Payload.Users.Add(user);
            await _roomService.Update(request.RoomId, room.Payload);
            await _userManager.UpdateAsync(user);
            await _context.SaveChangesAsync();
            await Clients.Caller.SendAsync("Self", user);
            await Clients.Group(request.RoomId.ToString()).SendAsync("UserJoined", user);

        }
    }
}
