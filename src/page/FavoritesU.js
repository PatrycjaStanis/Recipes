import React, { useState, useEffect } from 'react';
import LoggedHeader from '../components/LoggedHeader';
import Favorites from '../components/Favorites';
import SearchResults from '../components/SearchResults';

function FavoritesU() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleFavoriteChange = (updatedFavorites) => {
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <LoggedHeader />
      <SearchResults onFavoriteChange={handleFavoriteChange} />
      <Favorites favoriteRecipes={favorites} />
    </div>
  );
}

export default FavoritesU;


