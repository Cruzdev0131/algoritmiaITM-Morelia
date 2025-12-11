import { useState } from 'react';
import './Faq.css';

function Faq() {
  // Estado para controlar qué pregunta está abierta
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    // Si ya está abierta, la cierra (null), si no, pone el índice
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Qué lenguajes de programación se utiliza en el capítulo?",
      answer: "Principalmente C++ ya que ofrece una sintaxis fácil de aprender, además de ser rápido y requerir de pocos recursos."
    },
    {
      question: "¿Cuál es el propósito del capítulo?",
      answer: "Preparar a estudiantes de la institución para participar en concursos de programación competitiva como el ICPC y coding cup."
    },
    {
      question: "¿Qué tipo de actividades realiza el capítulo?",
      answer: "Principalmente concursos y clases de algoritmos enfocados a la programación competitiva, además de otros eventos como conferencias y sesiones de entrenamiento."
    },
    {
      question: "¿En dónde ocurren las actividades del capítulo?",
      answer: "Principalmente se llevan a cabo de manera presencial en la institución, específicamente en el edificio I, pero también se tienen contempladas sesiones en línea."
    },
    {
      question: "¿Qué requisitos hay para entrar al capítulo?",
      answer: (
        <ul style={{ paddingLeft: '1.2rem' }}>
            <li>Ser un estudiante del TecNM Morelia</li>
            <li>Tener disponibilidad de horario.</li>
            <li>Contar con un equipo (laptop).</li>
            <li><b>No tiene costo</b> y no es necesario saber programar previamente a nivel experto.</li>
        </ul>
      )
    },
    {
      question: "¿Cómo puedo unirme?",
      answer: <span>Haz clic en el enlace "¡Únete!" y mantente atento a nuestras convocatorias de clases, cursos y concursos.</span>
    }
  ];

  return (
    <div className="container">
        {/* Usamos la clase correcta 'faq-list' que definiremos en el CSS */}
        <section className="faq-list">
            <h2 className="section-title">Preguntas Frecuentes</h2>
            
            {faqs.map((item, index) => (
                <div 
                    key={index} 
                    className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                >
                    <div className="faq-question" onClick={() => toggleFaq(index)}>
                        {item.question}
                    </div>
                    <div className="faq-answer">
                        {item.answer}
                    </div>
                </div>
            ))}
        </section>
    </div>
  );
}

export default Faq;