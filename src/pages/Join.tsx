import './Join.css';
import { FaFacebook, FaInstagram, FaDiscord, FaWhatsapp } from 'react-icons/fa';

function Join() {
  return (
    <div className="container">
      <div className="post">
        <h2>¡Únete al Capítulo!</h2>
        <p>¿Te apasiona la programación? Únete a nuestro equipo y forma parte de los retos, talleres y eventos.</p>

        <div className="join-socials">
          <a href="https://www.facebook.com/profile.php?id=61575041050815" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/algoritmiaitm?igsh=NGVkazRjbWx2eGtr" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://discord.gg/vPRgwwYZ" target="_blank" rel="noreferrer">
            <FaDiscord />
          </a>
          <a href="https://whatsapp.com/channel/0029Vb7Iuq1BA1f4srngcy2N" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Join;
