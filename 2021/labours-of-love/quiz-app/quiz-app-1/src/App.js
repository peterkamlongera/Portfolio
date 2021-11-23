import "./App.css";
import React, {useState, useContext} from "react";

import MainMenu from "./components/mainmenu.js";
import Quiz from "./components/quiz.js";
import EndScreen from "./components/endscreen.js";

import {QuizContext} from "./helpers/contexts.js";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endscreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
