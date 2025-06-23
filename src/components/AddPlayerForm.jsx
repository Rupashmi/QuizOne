import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddPlayerForm() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const playerData = {
      name,
      category,
      difficulty,
    };
    localStorage.setItem('playerData', JSON.stringify(playerData));
    console.log('✅ Form submitted, navigating to quiz...');
    navigate('/quiz/start');
  };

  const isFormValid = name && category && difficulty;

  return (
    <form onSubmit={handleSubmit}>
      <h1><center>Player Details</center></h1>
      <label>Player Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label>Quiz Category:</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="">--Choose--</option>
        <option value="food">Food</option>
        <option value="travel">Travel</option>
        <option value="sports">Sports</option>
        <option value="movies">Movies</option>
        <option value="general">General Knowledge</option>
      </select>

      <label>Difficulty Level:</label>
      <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} required>
        <option value="">--Choose--</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <button type="submit" disabled={!isFormValid}>Start Quiz</button>
    </form>
  );
}

export default AddPlayerForm;
