using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using FatehApp.API.Data;
using FatehApp.API.Dtos;
using FatehApp.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;


namespace FatehApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class QuoteController : ControllerBase
    {
        private readonly IMapper _mapper;
        public IAuthRepository _repo { get; }
        public IQuoteRepository _quoteRepo { get; }
        public IConfiguration _Config { get; }
        public QuoteController(IAuthRepository repo, 
                               IConfiguration config, 
                               IQuoteRepository quoteRepo,
                               IMapper mapper
                               )
        {
            _Config = config;
            _repo = repo;
            _quoteRepo = quoteRepo;
            _mapper = mapper;
        }
        [AllowAnonymous]
        [HttpPost("savequote")]
        public async Task<IActionResult> SaveQuote(QuoteDto quoteDto)
        {
            //validate request
         
            var createdUser = await _quoteRepo.SaveQuote(quoteDto);

            return StatusCode(201);

        }

        [HttpGet("getquotes")]
        public async Task<IActionResult> GetQuotes()
        {
            var quotes =  await _quoteRepo.GetQuotes();
            
            var quoteToReturn = _mapper.Map<IEnumerable<QuoteDto>>(quotes);
            return Ok(quoteToReturn);
        }

        [HttpGet]
        [Route("getquote/{id:int}")]
        public async Task<IActionResult> GetQuote(int id)
        {
            var quotes =  await _quoteRepo.GetQuote(id);
          
            var quoteToReturn = _mapper.Map<QuoteDto>(quotes);
            return Ok(quoteToReturn);
        }
             
    }
}