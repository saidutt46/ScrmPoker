using System;
using Autofac;
using Infrastructure.Interfaces;
using Infrastructure.Services;

namespace Infrastructure
{
    public class InfrastructureAutofacModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<RoomService>().As<IRoomService>().InstancePerLifetimeScope();
        }
    }
}
