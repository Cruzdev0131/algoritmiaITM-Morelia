import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import './Footer.css';
function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p className="copyright">&copy; 2025 CAPC-ITM | Algoritmia ITM</p>
        
        <div className="social-links">
          {/* Recuerda poner tus URLs reales en el href */}
          <a href="https://facebook.com/tu-pagina" target="_blank" rel="noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://instagram.com/tu-usuario" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="mailto:tu-correo@ejemplo.com" aria-label="Email">
            <FaEnvelope />
          </a>
       
        </div>
        
        <div className="credits">
          Desarrollado por <a href="https://github.com/Cruzdev0131" target="_blank" rel="noreferrer">cruzdev</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
