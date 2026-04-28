import React, { useState } from 'react';
import Welcome from "./Components/Welcome";
import Quiz from "./Components/Quiz";
import quizData from "./Data/questions";
import './Components/Welcome.css';

// Shuffle function
function shuffleArray(array) {
const shuffled = [...array];
for (let i = shuffled.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
}
return shuffled;
}

function App() {
const [started, setStarted] = useState(false);
const [finished, setFinished] = useState(false);
const [questions, setQuestions] = useState([]);
const [currentQuestion, setCurrentQuestion] = useState(0);
const [score, setScore] = useState(0);
const [answered, setAnswered] = useState(false);
const [selectedAnswer, setSelectedAnswer] = useState(null);

// Start quiz
const handleStart = () => {
setQuestions(shuffleArray(quizData));
setStarted(true);
};

// Handle answer
const handleAnswer = (index) => {
if (!questions[currentQuestion]) return;


const correctIndex = questions[currentQuestion].correct;

setSelectedAnswer(index);
setAnswered(true);

if (index === correctIndex) {
  setScore((prev) => prev + 1);
}


};

// Next question
const nextQuestion = () => {
if (currentQuestion < questions.length - 1) {
setCurrentQuestion((prev) => prev + 1);
setAnswered(false);
setSelectedAnswer(null);
}
};

// Restart quiz
const restartQuiz = () => {
setStarted(false);
setFinished(false);
setQuestions([]);
setCurrentQuestion(0);
setScore(0);
setAnswered(false);
setSelectedAnswer(null);
};

const progress =
questions.length > 0
? ((currentQuestion + 1) / questions.length) * 100
: 0;

return ( <div className="app-container">
{!started ? ( <Welcome onStart={handleStart} />
) : finished ? ( <div className="card"> <h2>Quiz Completed! 🎉</h2> <h3>Final Score: {score}/{questions.length}</h3>


      <button onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  ) : (
    <div className="card">
      <h2>Score: {score}</h2>

      {/* Progress bar */}
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

        <p>
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </div>

      {/* Quiz */}
      {questions.length > 0 && (
        <Quiz
          data={questions[currentQuestion]}
          onAnswer={handleAnswer}
          answered={answered}
          selectedAnswer={selectedAnswer}
        />
      )}

      {/* Navigation */}
      {currentQuestion === questions.length - 1 ? (
        <button onClick={() => setFinished(true)}>
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
