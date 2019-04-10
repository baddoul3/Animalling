using Animalling.API.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Animalling.API.Data
{
    public class AnimallingContext : DbContext
    {
        public AnimallingContext(DbContextOptions<AnimallingContext> options) : base(options)
        {}

        public DbSet<Value> Values { get; set; }
    }
}
