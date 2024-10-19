import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importuj useNavigate z react-router-dom
import './Login.css';
import LogHeader from '../components/LogHeader'; // Importuj LogHeader

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Użyj useNavigate do nawigacji

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Sprawdź, czy logowanie jest dla admina
    if (email === 'ad@wp.pl' && password === 'admin') {
      console.log('Zalogowano jako admin');
      // Przekierowanie na stronę AdminHome
      navigate('/AdminHome');
    }
    // Sprawdź, czy logowanie jest dla użytkownika
    else if (email === 'uz@wp.pl' && password === 'uzytkownik') {
      console.log('Zalogowano jako użytkownik');
      // Przekierowanie na stronę LogHome
      navigate('/LogHome');
    } else {
      // Jeśli dane są nieprawidłowe, wyświetl alert (lub możesz dodać bardziej zaawansowaną walidację)
      alert('Nieprawidłowy email lub hasło');
    }
  };

  return (
    <div>
      {/* Wyświetl LogHeader nad formularzem */}
      <LogHeader />

      {/* Formularz logowania */}
      <div className="login-container">
        <h2 className="login-title">Logowanie</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Hasło:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Zaloguj się</button>
        </form>

        {/* Link do rejestracji, bez pogrubienia */}
        <a href="/Registration" className="registration-link">
          Nie posiadasz jeszcze konta? Zarejestruj się
        </a>
      </div>
    </div>
  );
}

export default Login;

