import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "instant" salta de golpe, "smooth" hace la animación de subida.
    // Para cambios de página, "instant" suele ser mejor para no marear,
    // pero si te gusta el efecto suave usa 'smooth'.
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
    });
  }, [pathname]);

  return null;
}