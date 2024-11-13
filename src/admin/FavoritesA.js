import React, { useState, useEffect } from 'react';
import AdminHeader from '../components/AdminHeader';
import Favorites from '../components/Favorites';
import SearchResults from '../components/SearchResults';

function FavoritesA() {
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
      <AdminHeader />
      <SearchResults onFavoriteChange={handleFavoriteChange} />
      <Favorites favoriteRecipes={favorites} />
    </div>
  );
}

export default FavoritesA;