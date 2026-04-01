import React from 'react';

function Quiz({data, onAnswer}) {
    if (!data) return <div>Loading...</div>;
    return ( 
        <div>
            <h2>{data.question}</h2>
                {data.answers.map((option, index) => (
                    <button key={index} onClick={() => onAnswer(option)}>
                        {option}
                    </button>
                ))}
        </div>
    );
}

export default Quiz;
