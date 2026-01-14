// src/data/eventsData.tsx
import { type ReactNode } from 'react';
import {  FaCalendarAlt, FaClock, FaMapMarkerAlt, FaBrain } from 'react-icons/fa';

// Definimos la estructura de un Evento Próximo
export interface UpcomingEvent {
  id: string;
  icon: ReactNode;
  title: string;
  summary: string;
  details: ReactNode;
}

// Definimos la estructura de un Evento Pasado (Historial)
export interface PastEvent {
  date: string;
  title: string;
  description: string;
}

// --- LISTA DE PRÓXIMOS EVENTOS ---
export const upcomingEvents: UpcomingEvent[] = [
  {
    id: "event-icpc-2026",
    icon: <FaBrain />, // Icono de cerebro o trofeo para entrenamiento
    title: "Rumbo al ICPC GP México 2026",
    summary: "Entrenamientos intensivos para la temporada 2026.",
    details: (
      <>
        <div className="event-meta">
          <span><FaCalendarAlt /> Inicia: Febrero 2026 (Por confirmar)</span>
          <span><FaClock /> Sábados 10:00 AM</span>
          <span><FaMapMarkerAlt /> Laboratorio de Cómputo (Edificio I)</span>
        </div>
        
        <p>
          Comenzamos la preparación para el <strong>Gran Premio de México 2026</strong>. 
          Estaremos resolviendo problemsets de competencias pasadas y reforzando temas de:
        </p>
        
        <ul style={{ paddingLeft: '20px', marginBottom: '1rem' }}>
          <li>Programación Dinámica Avanzada.</li>
          <li>Teoría de Grafos y Flujos.</li>
          <li>Matemáticas y Geometría Computacional.</li>
        </ul>

        <div className="register-cta">
          <strong>¿Quieres representar al ITM?</strong>
          <br/>
          Asiste a las sesiones informativas y forma tu equipo de 3 personas.
        </div>
      </>
    )
  }
];

// --- LISTA DE EVENTOS PASADOS ---
export const pastEvents: PastEvent[] = [
  {
    date: "Dic 2025",
    title: "Winter Coding Cup 2025",
    description: "Torneo interno de cierre de año. ¡Fue un éxito con la participación de novatos y veteranos!"
  },
  {
    date: "Oct 2025",
    title: "ICPC Gran Premio de México (2da Fecha)",
    description: 'Nuestros equipos "Full Snack" y "Runtime Terror" lograron resolver 5 problemas, quedando en el Top 30 regional.'
  },
  {
    date: "Sep 2025",
    title: "Bienvenida de Novatos",
    description: 'Más de 40 estudiantes de nuevo ingreso se unieron a su primera sesión de "Hola Mundo" competitiva.'
  },
  {
    date: "Jun 2025",
    title: "Coding Cup Michoacán 2025",
    description: "Sede oficial. Recibimos a estudiantes de la UMSNH y la UTM. ¡Fue un éxito total!"
  }
];