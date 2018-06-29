using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using backend.Data;
using backend.Dtos;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Configuration;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private IConfiguration _configuration;
        private readonly IAuthRepository _repo;
        public UsersController(IAuthRepository repo, IConfiguration configuration)
        {
            _repo = repo;
            _configuration = configuration;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody]UserForRegisterDto userForRegisterDto)
        {
            userForRegisterDto.Username = userForRegisterDto.Username.ToLower();
            userForRegisterDto.Password = userForRegisterDto.Password.ToLower();

            if(await _repo.UserExists(userForRegisterDto.Username))
                ModelState.AddModelError("Username", "Username already existes");

            //Validate Request
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var userToCreate = new User
            {
                Username = userForRegisterDto.Username,
                Password = userForRegisterDto.Password
            };

            var createdUser = await _repo.Register(userToCreate, userForRegisterDto.Password);

            return StatusCode(201); 
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody]UserForRegisterDto userForLoginDto)
        {
            //Get the User from Repository
            var userFromRepo = await _repo.Login(userForLoginDto.Username.ToLower(), userForLoginDto.Password.ToLower());

            //If User doesnt exists then Unauthorized
            if (userFromRepo == null)
                return Unauthorized();

            //Generate token
            var tokenHandler = new JwtSecurityTokenHandler();    
            var key = Encoding.ASCII.GetBytes(_configuration["AppSettings:Token"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.NameIdentifier, userFromRepo.Id.ToString()),
                    new Claim(ClaimTypes.Name, userFromRepo.Username)
                }),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), 
                    SecurityAlgorithms.HmacSha512Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            return Ok (new {tokenString});
        }

    }
}