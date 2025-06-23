import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import AddPlayerForm from './components/AddPlayerForm.jsx';
import QuizEngine from './components/QuizEngine.jsx';
import ScoreSummary from './components/ScoreSummary.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import AboutPage from './pages/AboutPage.jsx';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-player" element={<AddPlayerForm />} />
        <Route path="/quiz/start" element={<QuizEngine />} />
        <Route path="/quiz/score" element={<ScoreSummary />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<h2 style={{ padding: '5rem' }}>404 - Page Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;
