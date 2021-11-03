using System;
using Autofac;
using Persistence.Interfaces;
using Persistence.Repository;

namespace Persistence
{
    public class PersistenceAutofacModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<RoomRepository>().As<IRoomRepository>().InstancePerLifetimeScope();
        }
    }
}
