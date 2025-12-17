// src/App.tsx
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import AnimatedRoutes from './components/AnimatedRoutes';
import ScrollToTop from './components/ScrollToTop'; // <--- Importar

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* <--- Colocar aquí */}
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  )
}

export default App;