import React, { useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom'; 

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Wylogowanie użytkownika 
    localStorage.removeItem('authToken'); // Przykład usunięcia tokena
    sessionStorage.clear(); // Czyszczenie sesji 

    // Po wylogowaniu przekieruj użytkownika na stronę główną
    navigate('/'); // Zmieniono ścieżkę na stronę główną
  }, [navigate]);

  return (
    <div className="logout-container">
      <h2>Wylogowywanie...</h2>
      <p>Proszę czekać, trwa wylogowywanie...</p>
    </div>
  );
};

export default Logout;
