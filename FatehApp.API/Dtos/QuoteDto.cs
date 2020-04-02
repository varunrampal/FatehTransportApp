using System;
using System.ComponentModel.DataAnnotations;

namespace FatehApp.API.Dtos
{
    public class QuoteDto
    {
       
       public int Id {get;set;}

       [Required]
       public string CompanyName { get; set; }
      
       [Required]
       public string Email { get; set; }

       [Required]
       public string Phone { get; set; }

       [Required]
       public string Name { get; set; }

       [Required]
       public string OriginCity { get; set; }

       [Required]
       public string DestinationCity { get; set; }

       public string Overview { get; set; }
       public DateTime quoteDate {get;set;}
    }
}