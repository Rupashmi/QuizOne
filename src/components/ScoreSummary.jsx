import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ScoreSummary() {
  const navigate = useNavigate();
  const [player, setPlayer] = useState({});
  const [data, setData] = useState({});

  useEffect(() => {
    const p = JSON.parse(localStorage.getItem('playerData'));
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    const last = leaderboard[leaderboard.length - 1];
    setPlayer(p);
    setData(last);
  }, []);

  const getMessage = () => {
    if (data.score >= 2) return 'Quiz Champion!';
    if (data.score === 1) return 'Almost there!';
    return 'More caffeine, maybe?';
  };

  const playAgain = () => {
    localStorage.removeItem('playerData');
    navigate('/');
  };

  return (
  <div className="score-summary">
    <h2>Well Done, {player.name}!</h2>
    <p>Score: {data.score}</p>
    <p>Total Time: {data.time} sec</p>
    <p>Date: {data.date}</p>
    <h3>{getMessage()}</h3>
    <button onClick={playAgain}>Play Again</button>
  </div>
);

}

export default ScoreSummary;
