using System.Threading.Tasks;
using backend.Data;
using backend.Dtos;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private readonly IAuthRepository _repo;
        public UsersController(IAuthRepository repo)
        {
            _repo = repo;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody]UserForRegisterDto userForRegisterDto)
        {
            //Validate Request

            userForRegisterDto.Username = userForRegisterDto.Username.ToLower();
            userForRegisterDto.Password = userForRegisterDto.Password.ToLower();

            if(await _repo.UserExists(userForRegisterDto.Username))
                return BadRequest("Username is already taken");

            var userToCreate = new User
            {
                Username = userForRegisterDto.Username
            };

            var createdUser = await _repo.Register(userToCreate, userForRegisterDto.Password);

            return StatusCode(201); 
        }

    }
}