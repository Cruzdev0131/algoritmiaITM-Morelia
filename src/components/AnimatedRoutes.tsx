import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/home';
import Blog from '../pages/Blog';
import About from '../pages/about';
import Faq from '../pages/Faq';
import Join from '../pages/Join';
import Temario from '../pages/Temario';
// Importa tu TopicPage si ya la tienes
// import TopicPage from '../pages/TopicPage';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    // mode="wait" asegura que la página vieja salga antes de que entre la nueva
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/join" element={<Join />} />
        <Route path="/temario" element={<Temario />} />
        {/* <Route path="/learning/:topicId" element={<TopicPage />} /> */}
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;