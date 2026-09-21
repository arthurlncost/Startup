import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AssistenteMascote from './components/AssistenteMascote'; // Certifica-te de que esta linha existe!

// Importação das tuas páginas
import Home from './pages/Home';
import Calculadora from './pages/Calculadora';
import Fazendas from './pages/Fazendas';
import Servicos from './pages/Servicos';
import Placas from './pages/Placas';
import Faq from './pages/Faq';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

import './App.css'; 

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/fazendas" element={<Fazendas />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/placas" element={<Placas />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

      {/* O mascote inteligente adicionado aqui, dentro do BrowserRouter */}
      <AssistenteMascote /> 
      
    </BrowserRouter>
  );
}