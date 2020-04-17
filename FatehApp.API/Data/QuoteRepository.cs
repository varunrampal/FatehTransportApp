using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FatehApp.API.Dtos;
using FatehApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace FatehApp.API.Data
{
    public class QuoteRepository : IQuoteRepository
    {
        public DataContext _Context { get; set; }

        public QuoteRepository(DataContext context)
        {
            _Context = context;
        }

        public async Task<Quote> SaveQuote(QuoteDto quoteDto)
        {
            var quoteToSave = new Quote
            {
                CompanyName = quoteDto.CompanyName,
                Name = quoteDto.Name,
                Email = quoteDto.Email,
                Phone = quoteDto.Phone,
                OriginCity = quoteDto.OriginCity,
                DestinationCity = quoteDto.DestinationCity,
                Overview = quoteDto.Overview,
                QuoteDate = DateTime.Now
            };

            await _Context.Quotes.AddAsync(quoteToSave);
            await _Context.SaveChangesAsync();

            return quoteToSave;
        }

        public async Task<List<Quote>> GetQuotes()
        {
            return await _Context.Quotes.OrderByDescending(q => q.QuoteDate).ToListAsync();
        }

        public async Task<Quote> GetQuote(int id)
        {
            return await _Context.Quotes.FirstOrDefaultAsync(q => q.Id == id);
        }

        public int DeleteQuote(int id)
        {
             _Context.Remove(_Context.Quotes.Single(a => a.Id == id));
             return _Context.SaveChanges();
          
        }
    }
}