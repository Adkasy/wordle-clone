import React, { useEffect, useState } from "react";
import "./App.css";
import GuessInput from "./components/GuessInput/GuessInput";
import GuessWordDisplay from "./components/GuessWordDisplay/GuessWordDisplay";
import Topbar from "./components/Topbar/Topbar";
import BasicModal from "./components/NotificationModal/NotificationModal";

function App() {
  const [arrOfGuess, setArrOfGuess] = useState([]);
  const [wordleAnswer, setWordleAnswer] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [disabledInput, setDisabledInput] = useState(false);

  useEffect(() => {
    getRandomWord();
  }, []);

  function inputGetter(inputFromUser) {
    setArrOfGuess([...arrOfGuess, inputFromUser]);

    if (inputFromUser === wordleAnswer) {
      setShowModal(true);
      setDisabledInput(true);
    }
  }

  function getRandomWord() {
    fetch("https://random-word-api.herokuapp.com/word?length=5")
      .then((res) => res.json())
      .then((data) => {
        setWordleAnswer(data[0].toUpperCase());
        console.log("Answer: ", data[0]);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="outermost-container">
      <Topbar />

      <div className="container-display">
        <GuessWordDisplay arrOfGuess={arrOfGuess} wordleAnswer={wordleAnswer} />
      </div>

      <div className="sticky-input-form">
        <GuessInput getInput={inputGetter} disabled={disabledInput} />
      </div>

      <BasicModal openModal={showModal} wordleAnswer={wordleAnswer} />
    </div>
  );
}

export default App;
