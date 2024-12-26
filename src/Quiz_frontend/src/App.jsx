import React from "react";
// import Quiz from "./Quiz";
import Quiz from "./QuizData";

function App() {
  return (
    <div>
      <header>
        <h1 className="heading">Quiz Competition</h1>
        <h3 className="title">Registration Form</h3>
      </header>
      <Quiz />
    </div>
  );
}

export default App;