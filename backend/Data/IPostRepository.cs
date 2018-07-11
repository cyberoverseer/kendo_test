using System.Threading.Tasks;
using backend.Models;

namespace backend.Data
{
    public interface IPostRepository
    {
         Task<Post> CreatePost(Post post);

         Task<Post> UpdatePost(Post post);

         Task<Post> DeletePost(Post post);
    }
}