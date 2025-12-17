// src/pages/Join.tsx
import PageTransition from '../components/PageTransition';
import { Reveal } from '../components/Reveal';
import ExpandableCard from '../components/ExpandableCard'; // <--- IMPORTAR
import { FaFacebook, FaInstagram, FaDiscord, FaWhatsapp, FaTrophy, FaUsers, FaCode, FaChalkboardTeacher } from 'react-icons/fa';
import './Join.css';

function Join() {
  return (
    <PageTransition>
      <div className="container join-container">
        
        {/* Header igual... */}
        <section className="join-header">
          <Reveal width="100%">
            <h2 className="section-title">¡Únete a la Comunidad!</h2>
            <p className="join-intro">
               Si te apasiona la tecnología y quieres llevar tus habilidades al siguiente nivel, 
               <strong> CAPC-ITM es tu lugar.</strong>
            </p>
          </Reveal>
        </section>

        {/* --- Grid de Beneficios con ExpandableCard --- */}
        <section className="benefits-section">
          <Reveal width="100%">
            <h3 className="benefits-title">¿Por qué unirte? (Haz clic en las tarjetas)</h3>
          </Reveal>
          
          <div className="benefits-grid">
            
            {/* Tarjeta 1: C++ */}
            <Reveal>
              <ExpandableCard 
                id="card-cpp"
                icon={<FaCode />}
                title="Aprende C++"
                summary="Domina uno de los lenguajes más rápidos y utilizados en la industria."
                details={
                  <>
                    <p>En el CAPC-ITM no solo vemos lo básico. Nos adentramos en:</p>
                    <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
                      <li>Estructuras de datos avanzadas (Grafos, Árboles).</li>
                      <li>Biblioteca de plantillas estándar (STL).</li>
                      <li>Optimización de memoria y tiempo de ejecución.</li>
                    </ul>
                    <p>Es el lenguaje #1 para el desarrollo de sistemas de alto rendimiento y videojuegos.</p>
                  </>
                }
              />
            </Reveal>

            {/* Tarjeta 2: Competencias */}
            <Reveal>
              <ExpandableCard 
                id="card-competencias"
                icon={<FaTrophy />}
                title="Competencias"
                summary="Participa en torneos locales e internacionales como ICPC."
                details={
                  <>
                    <p>Formamos equipos para representar al Tecnológico de Morelia en:</p>
                    <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
                      <li><strong>ICPC:</strong> El "mundial" de la programación.</li>
                      <li><strong>Coding Cup:</strong> Torneos regionales contra otras universidades.</li>
                      <li><strong>IEEExtreme:</strong> Competencia global de 24 horas.</li>
                    </ul>
                    <p>Viajamos a otras ciudades, conocemos gente y ponemos a prueba nuestras habilidades bajo presión.</p>
                  </>
                }
              />
            </Reveal>

            {/* Tarjeta 3: Networking */}
            <Reveal>
              <ExpandableCard 
                id="card-networking"
                icon={<FaUsers />}
                title="Networking"
                summary="Conecta con compañeros y egresados en grandes empresas."
                details={
                  <>
                    <p>Ser parte del club te abre puertas:</p>
                    <p>Muchos de nuestros ex-miembros ahora trabajan en empresas como <strong>Oracle, Microsoft, Amazon y Google</strong>.</p>
                    <p>Tendrás acceso a charlas exclusivas, consejos para entrevistas técnicas y una red de apoyo que dura toda la carrera.</p>
                  </>
                }
              />
            </Reveal>

             {/* Tarjeta 4: Mentorías */}
             <Reveal>
              <ExpandableCard 
                id="card-mentorias"
                icon={<FaChalkboardTeacher />}
                title="Mentorías"
                summary="Recibe asesoría gratuita de estudiantes avanzados."
                details={
                  <>
                    <p>¿Te atoraste en una materia? ¿No entiendes Punteros?</p>
                    <p>En el club fomentamos el aprendizaje entre pares ("Peer to Peer"). Los miembros más experimentados siempre están dispuestos a explicar temas complejos de forma sencilla.</p>
                    <p>Organizamos sesiones de estudio antes de exámenes importantes.</p>
                  </>
                }
              />
            </Reveal>

          </div>
        </section>

        {/* Sección de Redes Sociales igual... */}
        <section className="social-section">
            {/* ... (tu código de redes sociales anterior) ... */}
            {/* Si quieres te lo pego completo, pero es igual al paso anterior */}
             <Reveal width="100%">
            <div className="cta-box">
              <h3>¡Conéctate con nosotros!</h3>
              <p>La comunicación oficial y los avisos de clases se dan por nuestros grupos:</p>
              
              <div className="join-socials">
                <a href="https://whatsapp.com/channel/0029Vb7Iuq1BA1f4srngcy2N" target="_blank" rel="noreferrer" className="social-btn whatsapp">
                  <FaWhatsapp /> <span>Canal de Avisos</span>
                </a>
                <a href="https://discord.gg/vPRgwwYZ" target="_blank" rel="noreferrer" className="social-btn discord">
                  <FaDiscord /> <span>Comunidad</span>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61575041050815" target="_blank" rel="noreferrer" className="social-btn facebook">
                  <FaFacebook /> <span>Noticias</span>
                </a>
                <a href="https://www.instagram.com/algoritmiaitm?igsh=NGVkazRjbWx2eGtr" target="_blank" rel="noreferrer" className="social-btn instagram">
                  <FaInstagram /> <span>Eventos</span>
                </a>
              </div>
            </div>
          </Reveal>
        </section>

      </div>
    </PageTransition>
  );
}

export default Join;