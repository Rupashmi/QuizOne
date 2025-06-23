import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questionsData from '../data/questions';

function QuizEngine() {
  console.log("✅ QuizEngine component mounted");
  const navigate = useNavigate();
  const [player, setPlayer] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(15);
  const [timer, setTimer] = useState(null);
  const [timeStats, setTimeStats] = useState([]);

useEffect(() => {
  console.log("✅ useEffect ran, checking playerData...");
  const data = JSON.parse(localStorage.getItem('playerData'));
  console.log('PLAYER DATA:', data);

  if (!data) {
    console.log('No player data found. Redirecting...');
    return navigate('/');
  }

  const { category, difficulty } = data;
  console.log('CATEGORY:', category);
  console.log('DIFFICULTY:', difficulty);

  setPlayer(data);

  const allCategories = Object.keys(questionsData);
  const allDifficulties = Object.keys(questionsData[category] || {});
  console.log('Available Categories:', allCategories);
  console.log('Available Difficulties for selected category:', allDifficulties);

  const list = questionsData[category]?.[difficulty];
  console.log('Loaded Questions List:', list);

  if (!list || list.length === 0) {
    console.log('No questions found for selected category/difficulty. Redirecting...');
    return navigate('/');
  }

  setQuestions(list);
}, []);

  useEffect(() => {
    if (questions.length === 0) return;
    setSelected(null);
    setTimeLeft(15);
    const t = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(t);
          handleNext();
        }
        return prev - 1;
      });
    }, 1000);
    setTimer(t);
    return () => clearInterval(t);
  }, [current]);

  const handleOptionClick = (option) => {
    if (selected) return;
    const correct = questions[current].answer;
    if (option === correct) setScore(score + 1);
    setSelected(option);
    setTimeStats((prev) => [...prev, 15 - timeLeft]);
  };

  const handleNext = () => {
    if (current + 1 === questions.length) {
      const stats = {
        name: player.name,
        score,
        time: timeStats.reduce((a, b) => a + b, 0),
        date: new Date().toLocaleString(),
      };
      const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
      leaderboard.push(stats);
      localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
      navigate('/quiz/score');
    } else {
      setCurrent(current + 1);
    }
  };

  if (!questions.length) return <p>Loading quiz...</p>;

  const q = questions[current];
 return (
  <div className="quiz-container">
    <h2>Question {current + 1} of {questions.length}</h2>
    <p><strong>{q.question}</strong></p>

    <div className="quiz-options">
      {q.options.map((opt, idx) => (
        <button
          key={idx}
          onClick={() => handleOptionClick(opt)}
          className={
            selected
              ? opt === q.answer
                ? 'correct'
                : opt === selected
                ? 'incorrect'
                : ''
              : ''
          }
          disabled={!!selected || timeLeft === 0}
        >
          {opt}
        </button>
      ))}
    </div>

    <div className="timer">Time Left: {timeLeft}s</div>

    <button
      className="next-btn"
      onClick={handleNext}
      disabled={!selected && timeLeft > 0}
    >
      Next
    </button>
  </div>
);

}

export default QuizEngine;
