using System.Collections.Generic;
using System.Threading.Tasks;
using FatehApp.API.Dtos;
using FatehApp.API.Helpers;
using FatehApp.API.Models;

namespace FatehApp.API.Data
{
    public interface IQuoteRepository
    {
         Task<Quote> SaveQuote(QuoteDto quoteDto);
         Task<PagedList<Quote>> GetQuotes(QuoteParams quoteParams);
         Task<Quote> GetQuote(int id);
         int DeleteQuote(int id);
    }
}