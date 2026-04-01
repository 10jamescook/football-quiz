import './Components/Welcome.css';
import React, { useState } from 'react';
import Welcome from "./Components/Welcome";
import Quiz from "./Components/Quiz";
import quizData from "./Data/questions";


function App() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  const handleAnswer = (selected) => {
    setCurrentQuestion((prev) => prev + 1);
  };

  return ( 
    <div>
      {!started ? (
        <Welcome onStart={() => setStarted(true)} />
      ) : currentQuestion < quizData.length ? (
        <Quiz
        data = {quizData[currentQuestion]} 
        onAnswer={handleAnswer}
        />
      ) : (
        <h2>Quiz Completed! Thanks for playing.</h2>
      )}
    </div>
  );
}


export default App;
