using System.ComponentModel.DataAnnotations;

namespace backend.Dtos
{
    public class PostCreateDto
    {
        [Required]
        public string Title { get; set; }

        [Required]
        public string Body { get; set; }
    }
}