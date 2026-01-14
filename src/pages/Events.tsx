// src/pages/Events.tsx
import PageTransition from '../components/PageTransition';
import { Reveal } from '../components/Reveal';
import ExpandableCard from '../components/ExpandableCard';
import { upcomingEvents, pastEvents } from '../data/eventsData'; // <--- Importamos los datos
import './Events.css';

function Events() {
  return (
    <PageTransition>
      <div className="container events-container">
        
        {/* --- Encabezado --- */}
        <section className="events-header">
          <Reveal width="100%">
            <h2 className="section-title">Calendario de Actividades</h2>
            <p className="events-intro">
              Mantente al día con nuestros concursos, talleres y sesiones de práctica. 
              ¡No te pierdas la oportunidad de competir y aprender!
            </p>
          </Reveal>
        </section>

        {/* --- SECCIÓN: PRÓXIMOS EVENTOS (Renderizado Dinámico) --- */}
        <section className="upcoming-events">
          <Reveal width="100%">
            <h3 className="subsection-title">📅 Próximos Eventos</h3>
          </Reveal>

          <div className="events-grid">
            {upcomingEvents.map((event) => (
              <Reveal key={event.id}>
                <ExpandableCard 
                  id={event.id}
                  icon={event.icon}
                  title={event.title}
                  summary={event.summary}
                  details={event.details}
                />
              </Reveal>
            ))}
          </div>
        </section>

        {/* --- SECCIÓN: EVENTOS PASADOS (Renderizado Dinámico) --- */}
        <section className="past-events">
          <Reveal width="100%">
            <h3 className="subsection-title">📜 Historial Reciente</h3>
          </Reveal>

          <div className="past-events-list">
            {pastEvents.map((item, index) => (
              <div className="past-event-item" key={index}>
                <span className="past-date">{item.date}</span>
                <div className="past-info">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </PageTransition>
  );
}

export default Events;