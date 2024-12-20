import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './ChangePass.css'; 
import LoggedHeader from '../components/LoggedHeader';

function ChangePass() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    // walidacja
    if (newPassword !== confirmPassword) {
      alert('Nowe hasło i potwierdzenie hasła muszą być takie same.');
      return;
    }

    // Logika zmiany hasła 
    console.log('Zmiana hasła:', { currentPassword, newPassword });

    // Po udanej zmianie hasła, przekierowanie użytkownika stronę 
    navigate('/LogHome'); 
  };

  return (
    <div>
      <LoggedHeader />

      {/* Formularz zmiany hasła */}
      <div className="change-password-container">
        <h2 className="change-password-title">Zmień hasło</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="currentPassword">Obecne hasło:</label>
            <input
              type="password"
              id="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">Nowe hasło:</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Potwierdź nowe hasło:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Zmień hasło</button>
        </form>

        {/* Link do powrotu do logowania */}
        <a href="/Login" className="login-link">
          Powrót do logowania
        </a>
      </div>
    </div>
  );
}

export default ChangePass;
