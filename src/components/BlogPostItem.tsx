import { Reveal } from './Reveal';
import type { BlogPost } from '../data/blogData';

interface Props {
  post: BlogPost;
}

const BlogPostItem = ({ post }: Props) => {
  return (
    <div className="blog-post-item" style={{ marginBottom: '4rem' }}>
      <Reveal width="100%">
        <h3>{post.title}</h3>
      </Reveal>
      
      <Reveal>
        <ul>
          {post.content.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </Reveal>

      {post.mediaSrc && (
        <Reveal width="100%">
          <div className="media-container" style={{ marginTop: '1.5rem' }}>
            {post.mediaType === 'video' ? (
              <video 
                controls 
                className="blog-media" 
                style={{ width: '100%', borderRadius: '12px' }}
              >
                <source src={post.mediaSrc} type="video/mp4" />
                Tu navegador no soporta video.
              </video>
            ) : (
              <img
                src={post.mediaSrc}
                alt={post.title}
                className="blog-media"
                loading="lazy" // Optimización: carga perezosa de imágenes
              />
            )}
          </div>
        </Reveal>
      )}
    </div>
  );
};

export default BlogPostItem;