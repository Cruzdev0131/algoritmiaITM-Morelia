// src/components/ExpandableCard.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import "./ExpandableCard.css";

interface Props {
  id: string; // Un ID único para la animación (ej: "benefit-1")
  icon?: React.ReactNode; // Icono o imagen pequeña
  title: string;
  summary: string; // Texto corto que se ve siempre
  details: React.ReactNode; // Contenido completo que se ve al abrir
}

export default function ExpandableCard({ id, icon, title, summary, details }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* --- TARJETA COMPACTA (Estado Normal) --- */}
      <motion.div
        layoutId={id} // Esta prop es la magia que conecta la tarjeta chica con la grande
        className="expandable-card-compact"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div layoutId={`icon-${id}`} className="card-icon-wrapper">
          {icon}
        </motion.div>
        <motion.h4 layoutId={`title-${id}`}>{title}</motion.h4>
        <motion.p layoutId={`summary-${id}`} className="card-summary">
          {summary}
        </motion.p>
        <div className="click-hint">Ver más detalles →</div>
      </motion.div>

      {/* --- TARJETA EXPANDIDA (Modal / Overlay) --- */}
      <AnimatePresence>
        {isOpen && (
          <div className="card-overlay-backdrop">
            {/* Fondo oscuro para cerrar al hacer clic afuera */}
            <motion.div 
              className="backdrop-fill"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              layoutId={id} // Mismo ID = Animación fluida de posición y tamaño
              className="expandable-card-open"
            >
              {/* Botón de cerrar */}
              <button className="close-btn" onClick={() => setIsOpen(false)}>
                <FaTimes />
              </button>

              <motion.div layoutId={`icon-${id}`} className="card-icon-wrapper large">
                {icon}
              </motion.div>
              
              <motion.h2 layoutId={`title-${id}`} className="card-title-large">
                {title}
              </motion.h2>

              {/* El contenido detallado aparece con una pequeña animación de entrada */}
              <motion.div 
                className="card-content-scroll"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="card-summary-bold">{summary}</p>
                <div className="card-details-body">
                  {details}
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}