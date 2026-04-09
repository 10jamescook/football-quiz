import './Components/Welcome.css';
import React, { useState } from 'react';
import Welcome from "./Components/Welcome";
import Quiz from "./Components/Quiz";
import quizData from "./Data/questions";

function App() {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswer = (selected) => {
  if (answered) return;

  setSelectedAnswer(selected);

  const correctIndex = quizData[currentQuestion].correct;
  const correctAnswer = quizData[currentQuestion].answers[correctIndex];

  if (selected === correctAnswer) {
    setScore((prev) => prev + 1);
    setFeedback("correct");
  } else {
    setFeedback("incorrect");
  }

  setAnswered(true);
};

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setAnswered(false);
      setFeedback(null);
      setSelectedAnswer(null);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
      setAnswered(false);
      setFeedback(null);
      setSelectedAnswer(null);

    }
  };

  const finishQuiz = () => {
    setFinished(true);
  };

  const restartQuiz = () => {
    setStarted(false);
    setFinished(false);
    setCurrentQuestion(0);
    setScore(0);
    setAnswered(false);
    setFeedback(null);
  };

  const progress = ((currentQuestion + 1) / quizData.length) * 100;

  return (
    <div className="app-container">
      {!started ? (
        <Welcome onStart={() => setStarted(true)} />
      ) : finished ? (
        <div className ="card">
          <h2>Quiz Completed! 🎉</h2>
          <h3>Final Score: {score}/{quizData.length}</h3>

          <button onClick={restartQuiz}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="card">
          <h2>Score: {score}</h2>
<div style={{ marginBottom: "15px" }}>
  <div
    style={{
      width: "100%",
      backgroundColor: "#ddd",
      borderRadius: "10px",
      height: "10px"
    }}
  >
    <div
      style={{
        width: `${progress}%`,
        backgroundColor: "#4caf50",
        height: "100%",
        borderRadius: "10px",
        transition: "width 0.3s ease"
      }}
    />
  </div>

  <p style={{ marginTop: "5px" }}>
    Question {currentQuestion + 1} of {quizData.length}
  </p>
</div>
          <Quiz
            data={quizData[currentQuestion]}
            onAnswer={handleAnswer}
            answered={answered}
            selectedAnswer={selectedAnswer}
          />

          {/* Feedback */}
          <div style={{ marginTop: "10px" }}>
            {feedback && (
              <h3 style={{ color: feedback === "correct" ? "green" : "red" }}>
                {feedback === "correct" ? "✅ Correct!" : "❌ Incorrect!"}
              </h3>
            )}

            {feedback === "incorrect" && (
              <p>
                Correct answer: {
                  quizData[currentQuestion].answers[
                    quizData[currentQuestion].correct
                  ]
                }
              </p>
            )}
          </div>

          {/* Navigation */}
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>

          {currentQuestion === quizData.length - 1 ? (
            <button onClick={finishQuiz}>
              Finish
            </button>
          ) : (
            <button onClick={nextQuestion}>
              Next
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;