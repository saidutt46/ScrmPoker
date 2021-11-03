using System;
using System.Threading.Tasks;
using Domain.Entities;
using DtoModels.Requests;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;
using Persistence.Context;

namespace WebApi.Hubs
{
    public class RoomHub : Hub
    {
        private readonly ScrumPokerContext _context;
        private readonly UserManager<ApplicationUser> _userManager;
        public RoomHub(ScrumPokerContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        //public async Task JoinRoom(JoinRoomRequest request)
        //{
        //    await Groups.AddToGroupAsync(Context.ConnectionId, request.RoomId.ToString());
        //    ApplicationUser user = await _userManager.FindByIdAsync(request.UserId.ToString());
        //    user.ConnectionId = Context.ConnectionId;
        //    user.RoomId = request.RoomId;
        //    await _userManager.UpdateAsync(user);
        //    db.Users.Add(user);
        //    await db.SaveChangesAsync();
        //    await Clients.Caller.SendAsync("Self", user);
        //    await Clients.Group(request.RoomId).SendAsync("UserJoined", new ListChange<User>(user, await GetRoomUsers(request.RoomId)));
        //}
    }
}
