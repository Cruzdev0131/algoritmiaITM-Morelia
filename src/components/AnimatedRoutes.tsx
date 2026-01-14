// src/components/AnimatedRoutes.tsx (Actualizado)
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/home';
import Blog from '../pages/Blog';
import About from '../pages/About';
import Faq from '../pages/Faq';
import Join from '../pages/Join';
import Temario from '../pages/Temario';
import TopicPage from '../pages/TopicPage'; 
import Events from '../pages/Events'; 
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/events" element={<Events />} />
        <Route path="/join" element={<Join />} />
        <Route path="/temario" element={<Temario />} />
        <Route path="/learning/:topicId" element={<TopicPage />} /> 
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;