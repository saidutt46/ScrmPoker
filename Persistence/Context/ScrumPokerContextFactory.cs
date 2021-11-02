using System;
using Microsoft.EntityFrameworkCore;
using Persistence.Shared;

namespace Persistence.Context
{
    public class ScrumPokerContextFactory : DesignTimeDbContextFactoryBase<ScrumPokerContext>
    {
        protected override ScrumPokerContext CreateNewInstance(DbContextOptions<ScrumPokerContext> options)
        {
            return new ScrumPokerContext(options);
        }
    }
}
