import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const RecipeAdd = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null); // Stan do przechowywania zdjęcia
  const [imagePreview, setImagePreview] = useState(null); // Podgląd zdjęcia

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Przetwarzanie danych (w tym zdjęcia)
    console.log('Nowy przepis:', { title, description, image });

    // Wyczyszczenie formularza po przesłaniu
    setTitle('');
    setDescription('');
    setImage(null);
    setImagePreview(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file); // Tworzenie podglądu
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        margin: '20px',
        padding: '20px',
        border: '1px solid rgba(204, 204, 204, 0.5)',
        borderRadius: '8px',
        backgroundColor: 'transparent',
      }}
    >
      <Typography variant="h5" component="h2" sx={{ marginBottom: '16px', color: '#006400' }}>
        Dodaj nowy przepis
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
        <TextField
          label="Tytuł przepisu"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          fullWidth
          sx={{ marginBottom: '16px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
        />
        <TextField
          label="Opis przepisu"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          fullWidth
          multiline
          rows={4}
          sx={{ marginBottom: '16px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
        />

        {/* Zmniejszone pole do przesyłania zdjęcia */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            marginBottom: '16px',
          }}
        >
          <Button variant="contained" component="label">
            Wybierz zdjęcie
            <input
              accept="image/*"
              type="file"
              onChange={handleImageChange}
              hidden // Ukrycie standardowego inputa
            />
          </Button>
        </Box>

        {/* Podgląd zdjęcia */}
        {imagePreview && (
          <Box
            component="img"
            src={imagePreview}
            alt="Podgląd zdjęcia"
            sx={{
              marginBottom: '16px',
              maxWidth: '100%',
              maxHeight: '200px', // Zmniejszenie podglądu zdjęcia
              borderRadius: '8px',
              objectFit: 'cover',
            }}
          />
        )}

        {/* Wyśrodkowany przycisk Dodaj przepis */}
        <Box display="flex" justifyContent="center" alignItems="center">
          <Button type="submit" variant="contained" color="primary" sx={{ width: '100%' }}>
            Dodaj przepis
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default RecipeAdd;


