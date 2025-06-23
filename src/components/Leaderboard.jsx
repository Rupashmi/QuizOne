import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [records, setRecords] = useState([]);
  const [sortBy, setSortBy] = useState('score');

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('leaderboard')) || [];
    setRecords(data);
  }, []);

  const sorted = [...records].sort((a, b) =>
    sortBy === 'score' ? b.score - a.score : a.time - b.time
  );

  return (
  <div className="leaderboard-container">
    <h2>Leaderboard</h2>

    <label htmlFor="sort">Sort by:</label>
    <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
      <option value="score">Score</option>
      <option value="time">Time</option>
    </select>

    <table className="leaderboard-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
          <th>Time</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {sorted.map((entry, index) => (
          <tr key={index}>
            <td>{entry.name}</td>
            <td>{entry.score}</td>
            <td>{entry.time} sec</td>
            <td>{entry.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

}

export default Leaderboard;
