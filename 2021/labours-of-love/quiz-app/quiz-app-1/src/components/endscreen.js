import React, {useContext} from "react";
import {QuizContext} from "../helpers/contexts.js";
import {Questions} from "../helpers/questionbank.js";
import "../App.css";

function EndScreen() {
  const {score, setScore, setGameState} = useContext(QuizContext);
  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };
  return (
    <div>
      <h1>Quiz Finished</h1>
      <h3>
        {score} / {Questions.length}
      </h3>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default EndScreen;
