import React from 'react';

function Quiz({ data, onAnswer, answered, selectedAnswer }) {
  if (!data) return <div>Loading...</div>;

  const correctAnswer = data.answers[data.correct];

  return ( 
    <div>
      <h2>{data.question}</h2>

      {data.image && (
       <img 
  src={data.image} 
  alt="question visual" 
  style={{
    width: "100%",
    maxWidth: "350px",
    borderRadius: "10px",
    margin: "10px 0"
  }}
/>
      )}

      {data.caption && (
  <p style={{ fontStyle: "italic", marginTop: "5px", width: "100%", maxWidth: "400px", borderRadius: "10px", backgroundColor: "#f0f0f0", padding: "5px" }}>
    {data.caption}
  </p>
)}

<div style={{ marginTop: "15px" }}> 
      {data.answers.map((option, index) => {
        let backgroundColor = "";

        if (answered) {
          if (option === correctAnswer) {
            backgroundColor = "green";
          } else if (option === selectedAnswer) {
            backgroundColor = "red";
          }
        }


        return (
          <button 
            key={index}
            onClick={() => onAnswer(option)}
            disabled={answered}
            style={{ 
              backgroundColor,
              color: answered ? "black" : "white",
              margin: "5px"
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
    </div>
  );
}

export default Quiz;
