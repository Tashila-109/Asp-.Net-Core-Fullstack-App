using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Presistence;

namespace Application.Activities
{
  public class List
  {
    // This is the query
    public class Query : IRequest<List<Activity>> { }

    // This is the handler
    public class Handler : IRequestHandler<Query, List<Activity>>
    {
      private readonly DataContext _context;

      public Handler(DataContext context)
      {
        _context = context;
      }

      public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
      {
        var activities = await _context.Activities.ToListAsync();

        return activities;
      }
    }
  }
}