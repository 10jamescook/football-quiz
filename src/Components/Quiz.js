import React from 'react';

function Quiz({data, onAnswer}) {
    if (!data) return <div>Loading...</div>;
    return ( 
        <div>
            <h2>{data.question}</h2>

                {data.image && (
                    <img 
                    src={data.image} 
                    alt="Question related visual" 
                    style={{ width: "300px", maginBottom: "10px" }}
                    />
                )}  
                {data.answers.map((option, index) => (
                    <button key={index} onClick={() => onAnswer(option)}>
                        {option}
                    </button>
                ))}
        </div>
    );
}

export default Quiz;
