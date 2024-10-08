import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaThumbsUp, FaThumbsDown, FaComment, FaShare } from 'react-icons/fa';
import './blog.scss';

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const apiKey = '64cfacd8e6594e7b8a50179a0aaf6c06'; 
      const url = `https://newsapi.org/v2/everything?q=real+estate&apiKey=${apiKey}`;

      try {
        const response = await axios.get(url);
        setBlogs(response.data.articles.map(blog => ({
          ...blog,
          like: localStorage.getItem(`like-${blog.title}`) || '',
          dislike: localStorage.getItem(`dislike-${blog.title}`) || '',
          comment: localStorage.getItem(`comment-${blog.title}`) || '',
          share: localStorage.getItem(`share-${blog.title}`) || ''
        })));
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const handleButtonClick = (blog, buttonType) => {
    let newBlogState = {};

    if (buttonType === 'like') {
      newBlogState = {
        like: blog.like === 'active' ? '' : 'active',
        dislike: '',
        comment: blog.comment,
        share: blog.share
      };
    } else if (buttonType === 'dislike') {
      newBlogState = {
        like: '',
        dislike: blog.dislike === 'active' ? '' : 'active',
        comment: blog.comment,
        share: blog.share
      };
    } else if (buttonType === 'comment') {
      newBlogState = {
        like: blog.like,
        dislike: blog.dislike,
        comment: blog.comment === 'active' ? '' : 'active',
        share: blog.share
      };
    } else if (buttonType === 'share') {
      newBlogState = {
        like: blog.like,
        dislike: blog.dislike,
        comment: blog.comment,
        share: blog.share === 'active' ? '' : 'active'
      };
    }

    localStorage.setItem(`like-${blog.title}`, newBlogState.like);
    localStorage.setItem(`dislike-${blog.title}`, newBlogState.dislike);
    localStorage.setItem(`comment-${blog.title}`, newBlogState.comment);
    localStorage.setItem(`share-${blog.title}`, newBlogState.share);

    setBlogs(blogs.map(b => 
      b === blog ? { ...b, ...newBlogState } : b
    ));
  };

  const handleShareClick = (url) => {
    const shareUrl = encodeURIComponent(url);
    const emailUrl = `mailto:?subject=Check out this blog&body=${shareUrl}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${shareUrl}`;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${shareUrl}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;

    window.open(emailUrl, '_blank');
    // You can uncomment these lines if you want to enable more sharing options
    window.open(whatsappUrl, '_blank');
    window.open(twitterUrl, '_blank');
    window.open(facebookUrl, '_blank');
  };

  return (
    <div className="Blog">
      <h1>Real Estate Blogs</h1>
      <div className="blog-list">
        {blogs.map((blog) => {
          if (blog.title && blog.description && blog.urlToImage) {
            return (
              <div key={blog.title} className="blog-item">
                <div className="blog-image">
                  <img src={blog.urlToImage} alt={blog.title} />
                </div>
                <div className="blog-info">
                  <h2>{blog.title}</h2>
                  <p>{blog.description}</p>
                  <a href={blog.url} target="_blank" rel="noopener noreferrer" className="read-more">Read More</a>
                  <div className="blog-actions">
                    <button 
                      className={`like ${blog.like === 'active' ? 'active like' : ''}`} 
                      onClick={() => handleButtonClick(blog, 'like')}>
                      <FaThumbsUp />
                    </button>
                    <button 
                      className={`dislike ${blog.dislike === 'active' ? 'active dislike' : ''}`} 
                      onClick={() => handleButtonClick(blog, 'dislike')}>
                      <FaThumbsDown />
                    </button>
                    <button 
                      className={`comment ${blog.comment === 'active' ? 'active comment' : ''}`} 
                      onClick={() => handleButtonClick(blog, 'comment')}>
                      <FaComment />
                    </button>
                    <button 
                      className={`share ${blog.share === 'active' ? 'active share' : ''}`} 
                      onClick={() => handleShareClick(blog.url)}>
                      <FaShare />
                    </button>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default Blog;







