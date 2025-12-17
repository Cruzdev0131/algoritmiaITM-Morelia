// src/pages/TopicPage.tsx
import { useParams, Link } from 'react-router-dom'; 
import topicMap from '../topics'; 
import { useEffect, useState, type ComponentType } from 'react';
import PageTransition from '../components/PageTransition'; 
import './TopicPage.css'; 

function TopicPage() {
  const { topicId } = useParams<{ topicId: string }>();
  const [TopicComponent, setTopicComponent] = useState<ComponentType<any> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    if (topicId && topicMap[topicId]) {
      setTopicComponent(() => topicMap[topicId]); 
      // Opcional: Establecer el título de la página
      document.title = `${topicId.charAt(0).toUpperCase() + topicId.slice(1)} | Algoritmia ITM`;
    } else {
      setTopicComponent(null);
    }

    setLoading(false);
    window.scrollTo(0, 0);
  }, [topicId]);

  if (loading) {
    return (
      <PageTransition>
        <div className="container topic-page-container" style={{ textAlign: 'center', padding: '50px' }}>
          <h2>Cargando tema...</h2>
        </div>
      </PageTransition>
    );
  }

  return (
    <div className="container topic-page-container">
      {TopicComponent ? (
        // Renderiza el componente de tema encontrado
        <TopicComponent /> 
      ) : (
        // Muestra 404 si no se encontró el tema
        <PageTransition>
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <h2>Error 404: Tema no encontrado</h2>
                <p>El tema <strong>{topicId}</strong> no está disponible o la URL es incorrecta.</p>
            </div>
        </PageTransition>
      )}

      <div style={{ textAlign: 'center', marginTop: '30px', paddingBottom: '30px' }}>
        <Link to="/temario" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
          ← Volver al Temario
        </Link>
      </div>
    </div>
  );
}

export default TopicPage;