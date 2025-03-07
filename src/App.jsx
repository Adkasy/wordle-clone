import React, { useState } from "react";
import "./App.css";
import GuessInput from "./components/GuessInput/GuessInput";
import GuessWordDisplay from "./components/GuessWordDisplay/GuessWordDisplay";
import Topbar from "./components/Topbar/Topbar";

function App() {
  const [arrOfGuess, setArrOfGuess] = useState([]);

  function inputGetter(inputFromUser) {
    setArrOfGuess([...arrOfGuess, inputFromUser]);
  }

  return (
    <div className="outermost-container">
      <Topbar />
      <div className="container-display">
        <GuessWordDisplay arrOfGuess={arrOfGuess} />
      </div>
      <div className="sticky-input-form">
        <GuessInput getInput={inputGetter} />
      </div>
    </div>
  );
}

export default App;
