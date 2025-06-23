import React from 'react';

function AboutPage() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1>About QuizOne</h1>
<p>
  <strong>QuizOne</strong> is a modern, fun-filled quiz app built during the <em>KTJ Web Development & AI Workshop 2025</em>. 
  It’s fast, sleek, and all about putting your brain to the test—one question at a time!
</p>

<p>
  Created using <strong>ReactJS</strong>, <strong>React Router</strong>, and <strong>CSS animations</strong>, QuizOne delivers a smooth, responsive quiz experience with real-time interactions and local score tracking through <strong>localStorage</strong>. Whether you're flexing your trivia muscles or just here for fun, QuizOne’s got you covered.
</p>

<h3>What I Built & Learned</h3>
<ul>
  <li>💡 Functional components & dynamic state management in React</li>
  <li>🧭 Page navigation using React Router</li>
  <li>💾 LocalStorage for saving quiz progress and scores</li>
  <li>🎨 CSS animations and mobile-friendly responsive layouts</li>
</ul>

<p>
  More features, categories, and surprises are on the way. Stay tuned while exploring the quiz. </p>
  <p>
  And yes, here's a meme because we were told to:</p>
      <img src= "https://i.pinimg.com/736x/c8/8e/89/c88e89441974c21ab2730047f96c30d0.jpg" alt="Coding Meme\" style={{ width: '100%', maxWidth: '400px' }} />
    </div>
  );
}

export default AboutPage;
