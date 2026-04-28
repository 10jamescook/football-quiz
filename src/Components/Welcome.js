import React from 'react';

function Welcome({ onStart }) {
    return (

<div className="welcome-container">
    <h1> Welcome to the Football Quiz!</h1>

    <p>Here you're Football knowledge will be put to the test!</p>

    <div className="instructions">
      <h2>How to Play:</h2>
      <ul>
        <li>Click on the "Start Quiz" button to begin.</li>
        <li>You'll be presented with a series of football-related questions.</li>
        <li>Answer as many questions as you can!</li>
        <li>Each correct answer earns you a point.</li>
        <li>Select "Next" to proceed to the next question or you can select "Previous" to go back.</li>
        <li>Good luck!</li>
      </ul>
    </div>

    <button onClick={onStart}>Start Quiz!</button>
  </div>
    );
}

export default Welcome;