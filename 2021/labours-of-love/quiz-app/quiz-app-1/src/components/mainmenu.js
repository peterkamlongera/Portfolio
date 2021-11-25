import React, {useContext} from "react";
import {QuizContext} from "../helpers/contexts.js";

import "../App.css";

export default function MainMenu() {
  const {gameState, setGameState} = useContext(QuizContext);
  return (
    <div className="menu">
      <button onClick={() => setGameState("quiz")}>Start Quiz</button>
    </div>
  );
}
