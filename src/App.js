import React, { useState } from "react";
import "./App.css";
import {questions} from "./services/questions";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);


  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h3> Resultado final </h3>
          <h2>
            {score} de {questions.length} corretas - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Reiniciar jogo</button>
        </div>
      ) : (
        
         /* 5. Question Card  */
         <div className="question-card">
         {/* 2. Current Score  */}
        <h4 className="appScore"> Pontuação : {score}</h4>
        {/* Current Question  */}
        <h2 className="currentQuestion">
          Pergunta: {currentQuestion + 1} de {questions.length}
        </h2>
        <h3 className="question-text">{questions[currentQuestion].text}</h3>

        {/* List of possible answers  */}
        <ul className="questionList">
          {questions[currentQuestion].options.map((option) => {
            return (
              <li
                
                key={option.id}
                onClick={() => optionClicked(option.isCorrect)}
              >
                {option.text}
              </li>
            );
          })}
        </ul>
      </div>
       
      )}
    </div>
  );
}

export default App;