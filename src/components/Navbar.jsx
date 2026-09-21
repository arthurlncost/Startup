import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const fecharMenu = () => setMenuAberto(false);

  return (
    <header className="navbar-container">
      <div className="navbar-wrapper">
        {/* Logo / Mascote */}
        <NavLink to="/" className="navbar-brand" onClick={fecharMenu}>
          <img 
            src="/logo.png" 
            alt="Logo Eletricitrus" 
            className="navbar-logo-img" 
          />
          <span className="navbar-title">Eletri<span className="highlight">citrus</span></span>
        </NavLink>

        {/* Botão Hambúrguer para Mobile */}
        <button 
          className={`hamburger ${menuAberto ? 'is-active' : ''}`}
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Links do Menu */}
        <nav className={`navbar-links ${menuAberto ? 'active' : ''}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'} onClick={fecharMenu}>Início</NavLink>
          <NavLink to="/calculadora" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'} onClick={fecharMenu}>Calculadora</NavLink>
          <NavLink to="/placas" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'} onClick={fecharMenu}>Placas</NavLink>
          <NavLink to="/fazendas" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'} onClick={fecharMenu}>Fazendas Solares</NavLink>
          <NavLink to="/servicos" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'} onClick={fecharMenu}>Serviços & CEP</NavLink>
          <NavLink to="/faq" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'} onClick={fecharMenu}>Blog / FAQ</NavLink>
          <NavLink to="/login" className="nav-btn-login" onClick={fecharMenu}>Entrar</NavLink>
        </nav>
      </div>
    </header>
  );
}