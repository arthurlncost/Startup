import React, { useState } from 'react';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("A tentar autenticar o utilizador:", email);
    // Aqui entrará a lógica de ligação à API no futuro
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Entrar no Eletricitrus</h2>
          <p>Aceda à sua conta de energia solar</p>
          
          <div className="input-group">
            <label>E-mail</label>
            <input 
              type="email" 
              placeholder="exemplo@eletricitrus.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </div>

          <div className="input-group">
            <label>Palavra-passe</label>
            <input 
              type="password" 
              placeholder="********" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>

          <button type="submit" className="login-btn">Entrar</button>
        </form>
      </div>
    </div>
  );
}