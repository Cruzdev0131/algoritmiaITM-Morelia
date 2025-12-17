// src/components/Navbar.tsx
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  // Detectar scroll con optimización
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location.pathname === '/';
const showScrolledStyle = !isHome || isScrolled;


  const navLinks = [
    { title: "Inicio", path: "/" },
    { title: "Temario", path: "/temario" },
    { title: "Blog", path: "/blog" },
    { title: "Nosotros", path: "/about" },
    { title: "FAQ", path: "/faq" },
    { title: "¡Únete!", path: "/join" },
  ];

  // Variantes de animación para menú móvil
  const sidebarVariants = {
    open: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: { x: "100%", opacity: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
  }as const;

  return (
    <>
<header className={`navbar-wrapper ${showScrolledStyle ? "scrolled" : ""}`}>
          <div className="navbar-container">
          
          {/* BRANDING (Izquierda) */}
          <Link to="/" className="club-branding">
            <img
              src="/assets/images/favicon/android-chrome-512x512.png"
              alt="CAPC"
              className="club-logo"
            />
            
            {/* TRUCO: No desmontamos el componente con React. 
               Usamos CSS para colapsar la altura y opacidad del subtítulo.
               Esto elimina el "brinco" horizontal.
            */}
            <div className="club-info">
              <h1 className="club-title">CAPC-ITM</h1>
              <p className="club-subtitle">
                Capítulo de Algoritmia
              </p>
            </div>
          </Link>

          {/* NAV DESKTOP (Derecha) */}
          <nav className="desktop-nav">
            <div className="desktop-links">
              {navLinks.map((l) => (
                <NavLink
                  key={l.path}
                  to={l.path}
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  {l.title}
                </NavLink>
              ))}
            </div>
          </nav>

          {/* BOTÓN HAMBURGUESA (Móvil) */}
          <button
            className={`hamburger-menu ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menú"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </header>

      {/* MENÚ MÓVIL (Overlay) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Fondo oscuro al hacer clic cierra el menú */}
            <motion.div
              className="mobile-nav-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Panel lateral */}
            <motion.div
              className="mobile-nav"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Menú</h3>
              <ul className="mobile-nav-list">
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <NavLink to={l.path} onClick={() => setIsOpen(false)}>
                      {l.title}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;