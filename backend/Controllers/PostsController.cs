using System.Threading.Tasks;
using backend.Data;
using backend.Dtos;
using backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    
    [Route("api/[controller]")]
    public class PostsController : Controller
    {
        private readonly DataContext _context;

        private readonly IPostRepository _repo;

        public PostsController (DataContext context, IPostRepository repo)
        {
            _context = context;
            _repo = repo;
        }

        //Get ALL Posts (api/posts)
        [HttpGet]
        public async Task<IActionResult> GetPosts()
        {
            var posts = await _context.Posts.ToListAsync();

            return Ok(posts);
        }

        //Get specific post (api/posts/id)
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPost(int id)
        {
            var post = await _context.Posts.FirstOrDefaultAsync(x => x.Id == id);

            return Ok(post);
        }


        //Create a New Post (api/posts/create)
        [HttpPost("create")]
        public async Task<IActionResult> CreatePost( [FromBody]PostCreateDto postCreateDto)
        {
            postCreateDto.Title = postCreateDto.Title;
            postCreateDto.Body = postCreateDto.Body;

            var post = new Post
            {
                Title = postCreateDto.Title,
                Body = postCreateDto.Body
            };

            var createdPost = await _repo.CreatePost(post);

            return StatusCode(201);
        }

        //Update a Post (api/posts/id)
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePost(Post post_model, [FromBody]PostCreateDto postCreateDto)
        {
            if (!ModelState.IsValid) 
                return BadRequest(ModelState);

            post_model.Title = postCreateDto.Title;
            post_model.Body = postCreateDto.Body;

            await _repo.UpdatePost(post_model);

            return StatusCode(200);
        }

        //Delete a Post (api/posts/id)
        [HttpDelete("{id}")] 
        public async Task<IActionResult> DeletePost(int id)
        {
             var post = await _context.Posts.FirstOrDefaultAsync(x => x.Id == id);

            if (post == null)
                return Unauthorized();

            await _repo.DeletePost(post);

            return Ok("Deleted");

        }


    }
}