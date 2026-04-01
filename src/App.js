import './Components/Welcome.css';
import React, { useState } from 'react';
import Welcome from "./Components/Welcome";
import Quiz from "./Components/Quiz";
import quizData from "./Data/questions";


function App() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  
  const handleAnswer = (selected) => {
    const correctAnswer = quizData[currentQuestion].answers;

    if (selected === correctAnswer) {
      setScore((prev) => prev + 1);
    };

    const nextQuestion = () => {
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      }
    };

    const prevQuestion = () => {
      if (currentQuestion > 0) {
        setCurrentQuestion((prev) => prev - 1);
      }
    };

  return ( 
    <div>
      {!started ? (
        <Welcome onStart={() => setStarted(true)} />
      ) : currentQuestion < quizData.length ? (
        <>
          <h2>Score: {score} </h2>

        <Quiz
        data = {quizData[currentQuestion]} 
        onAnswer={handleAnswer}
        />

        <button 
        onClick={prevQuestion}
        disabled={currentQuestion === 0}
        >
          Previous
        </button>

        <button
        onClick={nextQuestion}
        disabled={currentQuestion === quizData.length - 1}
        >
          Next
        </button>
        </>     
      ) : (
        <h2>Quiz Completed! Thanks for playing.</h2>
      )}
    </div>
  );
}
}


export default App;
