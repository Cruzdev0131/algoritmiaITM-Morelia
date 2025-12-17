// src/pages/Temario.tsx (Actualizado)
import './Temario.css';
import { Link } from 'react-router-dom';

function Temario() {
const topics = [
    { title: "CONCEPTOS BÁSICOS DE PROGRAMACIÓN", path: "conceptos", icon: "💡" },
    { title: "ENTRADA Y SALIDA DE DATOS", path: "entrada-salida", icon: "⌨️" },
    { title: "CICLOS Y ESTRUCTURAS REPETITIVAS", path: "ciclos", icon: "🔄" },
    { title: "CONDICIONALES Y ESTRUCTURAS DE DECISIÓN", path: "condicionales", icon: "🔀" },
    { title: "ARREGLOS Y CADENAS DE CARACTERES", path: "cadenas-arreglos", icon: "📚" },
    { title: "VECTORES (ARREGLOS DINÁMICOS)", path: "vectores", icon: "📈" }, // Correcto: "vectores"
    { title: "MATRICES Y ARREGLOS BIDIMENSIONALES", path: "matrices", icon: "⬛" },
    { title: "ALGORITMOS DE BÚSQUEDA", path: "algoritmos-busqueda", icon: "🔍" },
    { title: "ESTRUCTURAS DE DATOS", path: "estructuras", icon: "🏗️" },
    { title: "TEORÍA DE GRAFOS", path: "grafos", icon: "🕸️" },
    { title: "DISJOINT SET UNION (DSU)", path: "dsu", icon: "🔗" },
  ];

  return (
    <div className="container">
      <h2>Temario de Estudio</h2>
      <p>Explora nuestros temas de programación competitiva organizados por nivel de dificultad.</p>
      
      <ul className="temario-list">
        {topics.map((topic, index) => (
          <li key={index}>
            <Link to={`/learning/${topic.path}`}>
              {topic.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Temario;