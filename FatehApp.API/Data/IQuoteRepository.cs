using System.Collections.Generic;
using System.Threading.Tasks;
using FatehApp.API.Dtos;
using FatehApp.API.Models;

namespace FatehApp.API.Data
{
    public interface IQuoteRepository
    {
         Task<Quote> SaveQuote(QuoteDto quoteDto);
         Task<List<Quote>> GetQuotes();
         Task<Quote> GetQuote(int id);
    }
}