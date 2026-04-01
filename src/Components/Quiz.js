import React from 'react';

function Quiz({data, onAnswer}) {
    return ( 
        <div>
            <h2>{data.question}</h2>
                {data.options.map((option, index) => (
                    <button key={index} onClick={() => onAnswer(option)}>
                        {option}
                    </button>
                ))}
        </div>
    );
}

export default Quiz;
