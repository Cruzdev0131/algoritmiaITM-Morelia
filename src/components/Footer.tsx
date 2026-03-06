import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">

        {/* Sección Izquierda: Branding y Descripción */}
        <div className="footer-brand">
          <h3 className="footer-title">CAPC-ITM</h3>
          <p className="footer-description">
            Capítulo de Algoritmia y Programación Competitiva del TecNM Campus Morelia.
            Forjando a los mejores programadores.
          </p>
        </div>

        {/* Sección Central: Enlaces Rápidos */}
        <div className="footer-links-section">
          <h4 className="footer-subtitle">Explora</h4>
          <ul className="footer-links-list">
            <li><a href="/">Inicio</a></li>
            <li><a href="/learning">Temario</a></li>
            <li><a href="/events">Eventos</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        {/* Sección Derecha: Redes Sociales */}
        <div className="footer-social-section">
          <h4 className="footer-subtitle">Conecta</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="mailto:tu-correo@ejemplo.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Barra Inferior: Copyright y Créditos */}
      <div className="footer-bottom">
        <p className="copyright">&copy; {new Date().getFullYear()} CAPC-ITM | Algoritmia ITM</p>
        <p className="credits">
          Desarrollado por <a href="https://github.com/Cruzdev0131" target="_blank" rel="noreferrer">cruzdev</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
