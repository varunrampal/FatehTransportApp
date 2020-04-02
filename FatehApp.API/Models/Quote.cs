using System;

namespace FatehApp.API.Models
{
    public class Quote
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string CompanyName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string OriginCity { get; set; }
        public string DestinationCity { get; set; }
        public string Overview { get; set; }
        public DateTime QuoteDate {get;set;}
    }
}