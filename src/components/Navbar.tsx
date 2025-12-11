// src/components/Navbar.tsx
import { useState, useEffect } from 'react';
// 1. Agregamos useLocation aquí
import { Link, NavLink, useLocation } from 'react-router-dom'; 
import { motion, AnimatePresence } from 'framer-motion';
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // 2. Obtenemos la ubicación actual
  const location = useLocation();
  const isHome = location.pathname === '/';

  // 3. Lógica maestra: Se ve "scrolled" si NO es home O si bajamos el scroll
  const shouldShowScrolled = !isHome || isScrolled;

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

useEffect(() => {
    let timeoutId: number | null = null;
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          // Añade histéresis: requiere más scroll para volver a "top"
          if (isScrolled) {
            // Necesita bajar a menos de 30px para volver a top
            if (scrollY < 30) {
              setIsScrolled(false);
            }
          } else {
            // Necesita subir a más de 70px para cambiar a scrolled
            if (scrollY > 70) {
              setIsScrolled(true);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isScrolled]); // Añadimos isScrolled como dependencia

  // ... (Tus definiciones de navLinks y transitions se quedan igual) ...
  
  const navLinks = [
    { title: "Temario", path: "/temario" },
    { title: "¡Únete!", path: "/join" },
    { title: "Inicio", path: "/" },
    { title: "BLOG", path: "/blog" },
    { title: "Backend del Club", path: "/about" },
    { title: "Preguntas Frecuentes", path: "/faq" },
  ];

  const layoutTransition = {
    type: "spring",
    stiffness: 400,
    damping: 30,
    mass: 0.8,
  } as const;

  const fadeTransition = {
    duration: 0.2,
    ease: "easeInOut"
  } as const;

  const navbarVariants = {
    top: {
      background: "linear-gradient(90deg, var(--primary), var(--secondary))",
      boxShadow: "var(--shadow)",
    },
    scrolled: {
      background: "rgba(30, 58, 138, 0.95)",
      boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
    }
  };

  const containerVariants = {
    top: {
      flexDirection: "column" as const,
      justifyContent: "center" as const,
      padding: "1rem",
      gap: "1rem",
    },
    scrolled: {
      flexDirection: "row" as const,
      justifyContent: "space-between" as const,
      padding: "0.5rem 1.5rem",
      gap: "1rem",
    }
  };

  // ... (El resto de tus variants se quedan igual) ...

  const logoVariants = {
    top: { height: 60, width: 60, scale: 1 },
    scrolled: { height: 40, width: 40, scale: 1 }
  };

  const brandingVariants = {
    top: { width: "100%", justifyContent: "center" as const },
    scrolled: { width: "auto", justifyContent: "flex-start" as const, flexShrink: 0 }
  };

  const navVariants = {
    top: { width: "100%" },
    scrolled: { width: "auto", flexShrink: 0 }
  };

  const linksContainerVariants = {
    top: { background: "rgba(0,0,0,0.2)", padding: "0.5rem 1rem" },
    scrolled: { background: "rgba(0,0,0,0)", padding: "0rem", marginLeft: "auto" }
  };

  return (
    <>
      {/* 4. ACTUALIZACIÓN: Usamos shouldShowScrolled en lugar de isScrolled */}
      <motion.div 
        className={`navbar-wrapper ${shouldShowScrolled ? 'scrolled' : ''}`}
        variants={navbarVariants}
        initial="top"
        animate={shouldShowScrolled ? "scrolled" : "top"}
        transition={layoutTransition}
      >
        <motion.div 
          className="navbar-container"
          variants={containerVariants}
          initial="top"
          animate={shouldShowScrolled ? "scrolled" : "top"}
          transition={layoutTransition}
        >
          
          <motion.div 
            className="club-branding"
            variants={brandingVariants}
            transition={layoutTransition}
          >
            <Link to="/" className="logo-link" onClick={() => window.scrollTo(0, 0)}>
              <motion.img 
                src="/assets/images/favicon/android-chrome-512x512.png" 
                alt="Logo CAPC-ITM" 
                className="club-logo"
                variants={logoVariants}
                transition={layoutTransition}
              />
               
              <AnimatePresence mode="wait">
                {/* 4. ACTUALIZACIÓN: Condición actualizada */}
                {!shouldShowScrolled ? (
                  <motion.div 
                    key="full-info"
                    className="club-info"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={fadeTransition}
                  >
                    <h1 className="club-title">CAPC-ITM</h1>
                    <p className="club-subtitle">
                      Capítulo de Algoritmia y Programación Competitiva
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="abbreviation"
                    className="club-abbreviation"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={fadeTransition}
                  >
                    CAPC
                  </motion.div>
                )}
              </AnimatePresence>
            </Link>

            <button 
              className={`hamburger-menu ${isOpen ? 'active' : ''}`} 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </motion.div>

          <motion.nav 
            className="desktop-nav"
            variants={navVariants}
            transition={layoutTransition}
          >
            <motion.div 
              className="desktop-links"
              variants={linksContainerVariants}
              transition={layoutTransition}
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                  {link.title}
                </NavLink>
              ))}
            </motion.div>
          </motion.nav>

        </motion.div>
      </motion.div>

      {/* ... El menú móvil se queda igual ... */}
      <AnimatePresence>
        {isOpen && (
           /* ... código del menú móvil sin cambios ... */
           <motion.div 
            className="mobile-nav-overlay active"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMenu}
          >
            <motion.div 
              className="mobile-nav"
              initial={{ x: 250 }}
              animate={{ x: 0 }}
              exit={{ x: 250 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="mobile-nav-close" onClick={closeMenu}>&times;</button>
              <ul className="mobile-nav-list">
                {navLinks.map((link, index) => (
                  <motion.li 
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <NavLink to={link.path} onClick={closeMenu} className={({ isActive }) => (isActive ? 'active-link' : '')}>{link.title}</NavLink>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;