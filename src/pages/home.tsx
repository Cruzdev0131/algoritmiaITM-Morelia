import CoderCard from '../components/CoderCard';
import PageTransition from '../components/PageTransition'; // Asegúrate de que el archivo se llame así
import { Reveal } from '../components/Reveal'; // Componente para animar al hacer scroll
import Typewriter from 'typewriter-effect';
import './Home.css';

function Home() {
  return (
    <PageTransition>
      <div> 
        {/* --- Hero Section con Efecto Hacker --- */}
        <div style={{ textAlign: 'center', margin: '4rem 0', padding: '0 1rem', minHeight: '150px' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--primary)', fontWeight: '800', marginBottom: '1rem' }}>
            <Typewriter
              options={{
                strings: [
                  'Bienvenido a CAPC-ITM', 
                  'Aprendemos C++', 
                  'Resolvemos Problemas', 
                  'Creamos Futuro'
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--text-light)' }}>
            El capítulo de programación más pro del TecNM Morelia 🐜
          </p>
        </div>

        {/* --- Sección Top Coders --- */}
        <section className="mejores-del-club">
          <Reveal width="100%">
            <h2 className="section-title">Top Coders</h2>
          </Reveal>
          
          <div className="destacados">
            <CoderCard 
              category="🏆 Mejor Coder Mujer"
              imageSrc="/assets/images/team/ara2.jpeg"
              name="Ara Leilani Muñoz Martinez"
              details={["Carrera: Ingeniería en Sistemas", "Semestre: 5°"]}
            />

            <CoderCard 
              category="🏆 Mejor Coder Hombre"
              imageSrc="/assets/images/team/lead2.jpg"
              name="Adolfo Emiliano Cruz Velazquez"
              details={["Carrera: Ingeniería en Sistemas", "Semestre: 3°"]}
              extraImage="/assets/images/WhatsApp Image 2025-09-20 at 7.23.45 PM.jpeg"
              extraText="Primer lugar estatal Michoacán - Copa de Comunidades OmegaUp"
            />

            <CoderCard 
              category="🏆 Mejor Equipo"
              imageSrc="/assets/images/events/fullsnackdevelopers.jpg"
              name="Full Snack Developers"
              details={[
                "Adolfo Emiliano Cruz (3°)",
                "Daniel Alfonso Merlos (3°)",
                "Jose Roberto Garcia (5°)"
              ]}
            />
          </div>
        </section>

        {/* --- Sección Nosotros Animada --- */}
        <section className="nosotros-section">
          <div className="nosotros-container">
            <Reveal width="100%">
              <h2 className="section-title">Nosotros</h2>
            </Reveal>
            
            <div className="nosotros-content">
              <div className="nosotros-text">
                <Reveal>
                  <p>
                    Somos el <strong>Capítulo de Algoritmia y Programación Competitiva del TecNM Morelia (CAPC-ITM)</strong>, 
                    una comunidad apasionada por la programación y la resolución de problemas algorítmicos.
                  </p>
                </Reveal>
                <Reveal>
                  <p>
                    Nuestro objetivo es formar programadores competitivos de alto nivel, preparándolos para 
                    participar en competencias nacionales e internacionales como ICPC, OFMI y Coding Cup.
                  </p>
                </Reveal>
                
                <div className="nosotros-stats">
                  <Reveal>
                    <div className="stat-item">
                      <span className="stat-number">50+</span>
                      <span className="stat-label">Miembros Activos</span>
                    </div>
                  </Reveal>
                  <Reveal>
                    <div className="stat-item">
                      <span className="stat-number">15+</span>
                      <span className="stat-label">Competencias</span>
                    </div>
                  </Reveal>
                  <Reveal>
                    <div className="stat-item">
                      <span className="stat-number">3</span>
                      <span className="stat-label">Años de Experiencia</span>
                    </div>
                  </Reveal>
                </div>
              </div>

              <div className="nosotros-image">
                <Reveal>
                  <img src="/assets/images/events/icpc1erfecha.jpg" alt="Equipo CAPC-ITM" />
                </Reveal>
              </div>
            </div>

            {/* Sección de Valores */}
            <div className="nosotros-valores">
              <Reveal width="100%"><h3>Nuestros Valores</h3></Reveal>
              <div className="valores-grid">
                <Reveal>
                  <div className="valor-item">
                    <div className="valor-icon">💡</div>
                    <h4>Innovación</h4>
                    <p>Buscamos constantemente nuevas formas de resolver problemas complejos.</p>
                  </div>
                </Reveal>
                <Reveal>
                  <div className="valor-item">
                    <div className="valor-icon">🤝</div>
                    <h4>Colaboración</h4>
                    <p>Trabajamos en equipo para alcanzar objetivos comunes y crecer juntos.</p>
                  </div>
                </Reveal>
                <Reveal>
                  <div className="valor-item">
                    <div className="valor-icon">🎯</div>
                    <h4>Excelencia</h4>
                    <p>Nos esforzamos por alcanzar los más altos estándares en programación.</p>
                  </div>
                </Reveal>
                <Reveal>
                  <div className="valor-item">
                    <div className="valor-icon">📚</div>
                    <h4>Aprendizaje</h4>
                    <p>Promovemos el aprendizaje continuo y el intercambio de conocimientos.</p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

export default Home;