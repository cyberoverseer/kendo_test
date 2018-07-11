using System;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class PostRepository : IPostRepository
    {
        private readonly DataContext _context;
        public PostRepository (DataContext context)
        {
            _context = context;
        }

        public async Task<Post> CreatePost(Post post)
        {
            await _context.Posts.AddAsync(post);
            await _context.SaveChangesAsync();

            return post;
        }

        public async Task<Post> UpdatePost(Post post)
        {
            
            _context.Posts.Update(post);
            await _context.SaveChangesAsync();

            return post;
        }

        public async Task<Post> DeletePost(Post post)
        {
            
            _context.Posts.Remove(post);
            await _context.SaveChangesAsync();

            return post;
        }
    }
}