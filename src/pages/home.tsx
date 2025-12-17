// src/pages/home.tsx
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaTimes, FaLightbulb, FaHandshake, FaMedal, FaBookOpen } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

// Componentes
import CoderCard from '../components/CoderCard';
import PageTransition from '../components/PageTransition';
import { Reveal } from '../components/Reveal';
import ExpandableCard from '../components/ExpandableCard';

import './Home.css';

// --- DATOS DE LOS CODERS (Para el Grid y el Modal) ---
const codersData = [
  {
    id: "coder-ara",
    category: "🏆 Mejor Coder Mujer",
    imageSrc: "/assets/images/team/ara2.jpeg",
    name: "Ara Leilani Muñoz",
    details: ["Carrera: Ingeniería en Sistemas", "Semestre: 5°"],
    // Contenido extendido para el Modal
    modalContent: (
      <>
        <p>Ara ha demostrado un crecimiento excepcional en algoritmos de grafos y programación dinámica. Su disciplina la ha llevado a ser una referente en el club.</p>
        <ul style={{ paddingLeft: '20px', margin: '10px 0', color: 'var(--text-main)' }}>
          <li>Participación destacada en Coding Cup 2024.</li>
          <li>Mentora del grupo de iniciación en C++.</li>
          <li>Organizadora de talleres de mujeres en STEM.</li>
        </ul>
      </>
    )
  },
  {
    id: "coder-adolfo",
    category: "🏆 Mejor Coder Hombre",
    imageSrc: "/assets/images/team/lead2.jpg",
    name: "Adolfo Emiliano Cruz",
    details: ["Carrera: Ingeniería en Sistemas", "Semestre: 3°"],
    // Datos extra que se ven en la tarjeta pequeña
    extraImage: "/assets/images/WhatsApp Image 2025-09-20 at 7.23.45 PM.jpeg",
    extraText: "1er Lugar Estatal - Copa OmegaUp",
    // Contenido extendido para el Modal
    modalContent: (
      <>
        <p>Presidente actual del club y especialista en estructuras de datos. Adolfo lidera con el ejemplo, participando y ganando competencias a nivel estatal.</p>
        <div style={{ background: '#f1f5f9', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
          <strong>🏅 Logro Destacado:</strong>
          <p>Primer lugar estatal Michoacán - Copa de Comunidades OmegaUp</p>
          <img 
            src="/assets/images/WhatsApp Image 2025-09-20 at 7.23.45 PM.jpeg" 
            alt="Diploma Grande" 
            style={{ width: '100%', marginTop: '0.5rem', borderRadius: '4px' }} 
          />
        </div>
      </>
    )
  },
  {
    id: "team-fullsnack",
    category: "🏆 Mejor Equipo",
    imageSrc: "/assets/images/events/fullsnackdevelopers.jpg",
    name: "Full Snack Developers",
    details: ["Adolfo Emiliano Cruz (3°)", "Daniel Alfonso Merlos (3°)", "Jose Roberto Garcia (5°)"],
    modalContent: (
      <>
        <p>Este equipo ha logrado la clasificación a la fase regional de ICPC mostrando un trabajo en equipo impecable y una comunicación efectiva bajo presión.</p>
        <h4>Roles del Equipo:</h4>
        <ul style={{ paddingLeft: '20px', marginTop: '0.5rem', color: 'var(--text-main)' }}>
          <li><strong>Adolfo:</strong> Estrategia y Grafos.</li>
          <li><strong>Daniel:</strong> Matemáticas y Geometría.</li>
          <li><strong>Roberto:</strong> Implementación y DP.</li>
        </ul>
      </>
    )
  }
];

function Home() {
  const [selectedCoder, setSelectedCoder] = useState<typeof codersData[0] | null>(null);

  return (
    <PageTransition>
      <div> 
        {/* --- Hero Section --- */}
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

        {/* --- SECCIÓN TOP CODERS (Híbrida: Card Original + Modal) --- */}
        <section className="mejores-del-club" style={{ position: 'relative', zIndex: 1 }}>
          <Reveal width="100%">
            <h2 className="section-title">🏆 Cuadro de Honor</h2>
            {/* Mensaje sutil para indicar interactividad */}
           {/*  <p style={{ textAlign: 'center', color: 'var(--text-light)', marginBottom: '2rem', fontSize: '0.9rem' }}>
              (Haz clic en una tarjeta para ver más detalles)
            </p> */}
          </Reveal>
          
          <div className="destacados">
            {codersData.map((coder) => (
              <motion.div 
                key={coder.id}
                layoutId={coder.id} // ID mágico para la transición
                onClick={() => setSelectedCoder(coder)}
                style={{ cursor: 'pointer', height: '100%' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Usamos tu CoderCard original tal cual */}
                <CoderCard 
                  category={coder.category}
                  imageSrc={coder.imageSrc}
                  name={coder.name}
                  details={coder.details}
                  extraImage={coder.extraImage}
                  extraText={coder.extraText}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- SECCIÓN NOSOTROS --- */}
        <section className="nosotros-section">
          <div className="nosotros-container">
            <Reveal width="100%">
              <h2 className="section-title">Sobre Nosotros</h2>
            </Reveal>
            
            <div className="nosotros-content">
              <div className="nosotros-text">
                <Reveal>
                  <p>
                    Somos el <strong>Capítulo de Algoritmia y Programación Competitiva (CAPC-ITM)</strong>. 
                    Más que un club, somos una familia de apasionados por el código.
                  </p>
                </Reveal>
                
                <div className="nosotros-stats">
                  <Reveal><div className="stat-item"><span className="stat-number">50+</span><span className="stat-label">Miembros</span></div></Reveal>
                  <Reveal><div className="stat-item"><span className="stat-number">15+</span><span className="stat-label">Podios</span></div></Reveal>
                  <Reveal><div className="stat-item"><span className="stat-number">3</span><span className="stat-label">Años</span></div></Reveal>
                </div>
              </div>

              <div className="nosotros-image">
                <Reveal>
                  <img src="/assets/images/events/icpc1erfecha.jpg" alt="Equipo CAPC-ITM" />
                </Reveal>
              </div>
            </div>

            {/* --- SECCIÓN VALORES (Interactive Grid) --- */}
            <div className="nosotros-valores">
              <Reveal width="100%"><h3>Nuestros Valores</h3></Reveal>
              <div className="valores-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                
                <Reveal>
                  <ExpandableCard 
                    id="val-innovacion"
                    icon={<FaLightbulb />}
                    title="Innovación"
                    summary="Buscamos nuevas formas de resolver problemas."
                    details={
                      <p>No nos conformamos con la 'fuerza bruta'. En cada problema buscamos la solución más óptima, elegante y eficiente. Fomentamos el uso de algoritmos novedosos y técnicas creativas.</p>
                    }
                  />
                </Reveal>

                <Reveal>
                  <ExpandableCard 
                    id="val-colaboracion"
                    icon={<FaHandshake />}
                    title="Colaboración"
                    summary="Crecemos juntos compartiendo conocimiento."
                    details={
                      <p>En el CAPC nadie se queda atrás. Los miembros avanzados dedican tiempo a enseñar a los nuevos. Creemos que explicar un tema es la mejor forma de dominarlo.</p>
                    }
                  />
                </Reveal>

                <Reveal>
                  <ExpandableCard 
                    id="val-excelencia"
                    icon={<FaMedal />}
                    title="Excelencia"
                    summary="Altos estándares en cada línea de código."
                    details={
                      <p>Nos preparamos para competir contra las mejores universidades del mundo. La disciplina, la práctica constante y el análisis de errores son nuestros pilares para alcanzar la excelencia.</p>
                    }
                  />
                </Reveal>

                <Reveal>
                  <ExpandableCard 
                    id="val-aprendizaje"
                    icon={<FaBookOpen />}
                    title="Aprendizaje"
                    summary="Nunca dejamos de aprender."
                    details={
                      <p>La tecnología cambia rápido. Organizamos talleres semanales, 'upsolving' de concursos pasados y estudiamos temas avanzados que no siempre se ven en el aula de clases.</p>
                    }
                  />
                </Reveal>

              </div>
            </div>
          </div>
        </section>

        {/* --- MODAL PARA TOP CODERS --- */}
        <AnimatePresence>
          {selectedCoder && (
            <div className="card-overlay-backdrop" style={{zIndex: 2000}}>
              <motion.div 
                className="backdrop-fill"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCoder(null)}
              />

              <motion.div
                layoutId={selectedCoder.id}
                className="expandable-card-open" // Reusamos la clase CSS del otro componente
                style={{ maxHeight: '90vh', overflowY: 'auto' }}
              >
                <button className="close-btn" onClick={() => setSelectedCoder(null)}>
                  <FaTimes />
                </button>

                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <motion.img 
                    src={selectedCoder.imageSrc} 
                    alt={selectedCoder.name}
                    style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', borderRadius: '12px' }} 
                  />
                  <span style={{ 
                    display: 'inline-block', 
                    background: 'var(--secondary)', 
                    color: 'white', 
                    padding: '0.5rem 1rem', 
                    borderRadius: '20px',
                    fontWeight: 'bold',
                    marginTop: '-1.5rem',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {selectedCoder.category}
                  </span>
                </div>
                
                <h2 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{selectedCoder.name}</h2>
                <div style={{ marginBottom: '1.5rem', color: 'var(--text-light)' }}>
                  {selectedCoder.details.map((det, idx) => (
                    <span key={idx} style={{ display: 'block' }}>{det}</span>
                  ))}
                </div>

                <div className="card-details-body">
                  {selectedCoder.modalContent}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </PageTransition>
  );
}

export default Home;