import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { AuthContext } from './context/AuthContext';
import { Home } from './Pages/Home';
import { Register } from './Pages/Register';
import { Login } from './Pages/Login';
import { Layout } from './components/Layout';

function App() {
  const [question, setQuestion] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=10')
      .then((res) => res.data)
      .then((data) => {
        const questions = data.results.map((question) => ({
          ...question,
          answers: [question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5),
        }));
        setQuestion(questions);
      });
  }, []);

  const handleAnswer = (answer) => {
    if (answer === question[currentIndex].correct_answer) {
      setScore(score + 10);
    }
  };

  setTimeout(() => {
    setCurrentIndex(currentIndex + 1);
  }, 5000);

  return question.length > 0 ? (
    <Layout>
      <Router>
        <Routes>
          {currentIndex >= question.length ? (
            <Route path="/" element={<h1>Kuis Berakhir, Skor Kamu Adalah {score}</h1>} />
          ) : (
            <Route path="/" element={<Home handleAnswer={handleAnswer} data={question[currentIndex]} />} />
          )}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Layout>
  ) : (
    <div className="loading">Loading...</div>
  );
}

export default App;
