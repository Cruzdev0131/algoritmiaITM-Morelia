import { teamMembers } from '../data/teamData';
import CoderCard from '../components/CoderCard';
import { Reveal } from '../components/Reveal';
import './About.css';

function About() {
  return (
    <div className="container about-container">
      
      {/* Sección Introductoria */}
      <div className="about-header">
        <Reveal width="100%">
          <h2 className="section-title">Backend del Capítulo</h2>
        </Reveal>
        
        {/* CORRECCIÓN AQUÍ: Agregamos width="100%" */}
        <Reveal width="100%">
          <p className="about-description">
            Detrás de cada competencia, taller y evento, hay un equipo apasionado 
            trabajando para impulsar el talento del TecNM Morelia. 
            Conoce a la estructura organizacional actual.
          </p>
        </Reveal>
      </div>

      {/* Grid del Equipo */}
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <Reveal key={index}>
            <CoderCard 
              category={member.role}
              imageSrc={member.image}
              name={member.name}
              details={[
                member.degree || "Miembro del CAPC", 
                "Gestión 2024-2025"
              ]}
            />
          </Reveal>
        ))}
      </div>

    </div>
  );
}

export default About;