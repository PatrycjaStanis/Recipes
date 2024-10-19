import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; // Importuj useNavigate z react-router-dom
import './Login.css'; // Możemy użyć tych samych stylów, co w loginie
import LogHeader from '../components/LogHeader'; // Importuj LogHeader

function Registration() {
  const [name, setName] = useState('');  // Dodaj stan dla imienia
  const [phone, setPhone] = useState(''); // Dodaj stan dla numeru telefonu
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(''); // Dodatkowy stan dla błędów
  const navigate = useNavigate(); // Użyj useNavigate do nawigacji

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sprawdzenie, czy hasła się zgadzają
    if (password !== confirmPassword) {
      setError('Hasła nie są takie same');
      return;
    }

    // Dodatkowe walidacje, np. sprawdzenie formatu numeru telefonu
    if (!/^\d{9}$/.test(phone)) {
      setError('Numer telefonu musi mieć 9 cyfr');
      return;
    }

    // Logika rejestracji (możesz tu dodać walidację lub API)
    console.log('Zarejestrowano:', { name, phone, email, password });

    // Po udanej rejestracji przekieruj na stronę logowania
    navigate('/login'); // Ścieżka do strony logowania
  };

  return (
    <div>
      {/* Wyświetl LogHeader nad formularzem */}
      <LogHeader />

      {/* Formularz rejestracji */}
      <div className="login-container">
        <h2 className="login-title">Rejestracja</h2>
        <form onSubmit={handleSubmit}>
          {/* Pole do wprowadzenia imienia */}
          <div className="form-group">
            <label htmlFor="name">Imię:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Pole do wprowadzenia numeru telefonu */}
          <div className="form-group">
            <label htmlFor="phone">Numer telefonu:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              pattern="\d{9}" // Wzorzec numeru telefonu: 9 cyfr
              title="Numer telefonu powinien zawierać 9 cyfr"
            />
          </div>

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

          <div className="form-group">
            <label htmlFor="confirmPassword">Potwierdź hasło:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Wyświetlenie błędu, jeśli hasła się nie zgadzają lub numer telefonu jest nieprawidłowy */}
          {error && <p className="error-message">{error}</p>}

          <button type="submit">Zarejestruj się</button>
        </form>

        {/* Link do logowania, bez pogrubienia */}
        <a href="/login" className="registration-link">
          Masz już konto? Zaloguj się
        </a>
      </div>
    </div>
  );
}

export default Registration;
