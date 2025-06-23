import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.svg";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="hero">
       <img src= {logo} alt="Quiz SVG" />
      <div>
        <h1>Test Your Knowledge!</h1>
        <p>
  Ready to put your brain to the test? 🧠✨
  </p><p> Whether you're a trivia champ, a curious learner, or just here for fun, <strong>QuizOne</strong> has something for everyone!
</p>
<p>
  No sign-ups, no pressure — just pure quiz fun. Let’s see how sharp you really are!
</p>
<p>
  <strong>Start a quiz and become the ultimate QuizMaster! 🏆</strong>
</p>
        <button className="start-btn" onClick={() => navigate('/add-player')}>
   Start Quiz
</button>
      </div>
     
    </div>
  );
}

export default Home;
