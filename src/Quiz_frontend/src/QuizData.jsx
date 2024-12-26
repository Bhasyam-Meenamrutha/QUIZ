import React, { useState } from "react";

const QuizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborghinis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

function Quiz() {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuizData = QuizData[currentQuiz];

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.id);
  };

  const handleSubmit = () => {
    if (selectedAnswer) {
      if (selectedAnswer === currentQuizData.correct) {
        setScore(score + 1);
      }
      if (currentQuiz + 1 < QuizData.length) {
        setCurrentQuiz(currentQuiz + 1);
        setSelectedAnswer(null);
      } else {
        setIsCompleted(true);
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuiz(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsCompleted(false);
  };

  return (
    <div className="quiz-container">
      {!isCompleted ? (
        <>
          <div className="quiz-header">
            <h2>{currentQuizData.question}</h2>
            <ul>
              {["a", "b", "c", "d"].map((option) => (
                <li key={option}>
                  <input
                    type="radio"
                    id={option}
                    name="answer"
                    className="answer"
                    checked={selectedAnswer === option}
                    onChange={handleAnswerChange}
                  />
                  <label htmlFor={option}>{currentQuizData[option]}</label>
                </li>
              ))}
            </ul>
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <div className="quiz-header">
          <h2>
            You answered {score}/{QuizData.length} questions correctly.
          </h2>
          <button onClick={resetQuiz}>Play Again</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
