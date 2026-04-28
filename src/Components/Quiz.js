import React from 'react';

function Quiz({ data, onAnswer, answered, selectedAnswer }) {
if (!data) return <div>Loading...</div>;

return ( <div> <h2>{data.question}</h2>


  {data.image && (
    <img 
      src={data.image} 
      alt="question visual" 
      className="quiz-image"
    />
  )}

  {data.caption && (
    <p className="quiz-caption">
      {data.caption}
    </p>
  )}

  <div className="answers">
    {data.answers.map((option, index) => {
      let className = "answer-btn";


      if (answered) {
        if (index === data.correct) {
          className += " correct";
        } else if (index === selectedAnswer) {
          className += " incorrect";
        }
      } else if (index === selectedAnswer) {
        className += " selected";
      }

      return (
        <button 
          key={index}
          onClick={() => onAnswer(index)} 
          disabled={answered}
          className={className}
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

