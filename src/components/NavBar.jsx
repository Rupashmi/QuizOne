import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <nav>
      <div className="nav-header">
        <h2>QUIZONE</h2>
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      <div className={`nav-links ${isOpen ? 'show' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/add-player" onClick={() => setIsOpen(false)}>Start Quiz</Link>
        <Link to="/leaderboard" onClick={() => setIsOpen(false)}>Scores</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
      </div>
    </nav>
  );
}

export default NavBar;
