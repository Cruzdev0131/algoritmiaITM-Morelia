// src/pages/Temario.tsx (Actualizado)
import './Temario.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: import('framer-motion').Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200 } }
  };

  return (
    <div className="container">
      <h2>Temario de Estudio</h2>
      <p>Explora nuestros temas de programación competitiva organizados por nivel de dificultad.</p>

      <motion.ul
        className="temario-list"
        variants={listVariants}
        initial="hidden"
        animate="show"
      >
        {topics.map((topic, index) => (
          <motion.li key={index} variants={itemVariants}>
            <Link to={`/learning/${topic.path}`}>
              {topic.title}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default Temario;