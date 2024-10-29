import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

import AdminHeader1 from '../components/AdminHeader1';

function AchangePass() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Walidacja, np. czy nowe hasło i potwierdzenie są takie same
    if (newPassword !== confirmPassword) {
      alert('Nowe hasło i potwierdzenie hasła muszą być takie same.');
      return;
    }

    // zmiana hasła
    console.log('Zmiana hasła:', { currentPassword, newPassword });

    // Po udanej zmianie hasła przekierowanie użytkownika na stronę home
    navigate('/LogHome'); 
  };

  return (
    <div>
      <AdminHeader1 />

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

export default AchangePass;
