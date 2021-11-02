using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain.Entities;

namespace Persistence.Shared
{
    public interface IRepository<T> where T : BaseEntity
    {
        Task<T> GetById(Guid id);
        Task<IList<T>> ListAll();
        Task<T> Add(T entity);
        Task Update(T entity);
        Task Delete(T entity);
    }
}
