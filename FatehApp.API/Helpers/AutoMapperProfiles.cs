using AutoMapper;
using FatehApp.API.Dtos;
using FatehApp.API.Models;

namespace FatehApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
         public AutoMapperProfiles()
         {
             CreateMap<Quote, QuoteDto>();
         }
    }
}