import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import BlogPostItem from '../components/BlogPostItem';
import { Reveal } from '../components/Reveal'; // Reusamos tu animación
import './Blog.css';

function Blog() {
  
  // Función para scroll suave
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container">
      
      {/* --- Navegación / Línea de tiempo --- */}
      <Reveal width="100%">
        <div id="inicio" className="timeline-index">
          <h2>Línea del tiempo</h2>
          <ul>
            {blogData.map((yearSection) => (
              <li key={yearSection.year}>
                <button 
                  onClick={() => scrollToSection(yearSection.id)}
                  style={{
                    background: 'var(--primary)',
                    color: 'white',
                    padding: '0.8rem 1.5rem',
                    borderRadius: '50px',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  BLOG {yearSection.year}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* --- Renderizado Dinámico de Secciones --- */}
      {blogData.map((yearSection) => (
        <div key={yearSection.year} id={yearSection.id} className="post year-section">
          <div className="year-header">
            <h2 className="section-title">Blog {yearSection.year}</h2>
            <Link to="/" className="back-link">Volver al inicio</Link>
          </div>

          <div className="posts-list">
            {yearSection.posts.map((post, index) => (
              <BlogPostItem key={index} post={post} />
            ))}
          </div>
        </div>
      ))}

      {/* Easter Egg (Mantenido) */}
      <div style={{ color: 'transparent', fontSize: '1px', userSelect: 'none' }}>
        <br />Hola, este es un easter egg dejado aquí por Full Snack Developer<br />
      </div>
    </div>
  );
}

export default Blog;