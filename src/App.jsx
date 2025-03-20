import React, { useEffect, useState } from "react";
import "./App.css";
import GuessInput from "./components/GuessInput/GuessInput";
import GuessWordDisplay from "./components/GuessWordDisplay/GuessWordDisplay";
import Topbar from "./components/Topbar/Topbar";
import BasicModal from "./components/NotificationModal/NotificationModal";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  const [arrOfGuess, setArrOfGuess] = useState([]);
  const [wordleAnswer, setWordleAnswer] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [disabledInput, setDisabledInput] = useState(false);
  const [letterStatus, setLetterStatus] = useState({});
  
  useEffect(() => {
    getRandomWord();
  }, []);

  function inputGetter(inputFromUser) {
    setArrOfGuess([...arrOfGuess, inputFromUser]);
    
    // Update letter statuses based on guess
    updateLetterStatus(inputFromUser);

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
  
  function updateLetterStatus(guess) {
    const newStatus = { ...letterStatus };
    
    // Process each letter in the guess
    for (let i = 0; i < guess.length; i++) {
      const letter = guess[i];
      
      if (letter === wordleAnswer[i]) {
        // Correct position
        newStatus[letter] = 'correct';
      } else if (wordleAnswer.includes(letter) && newStatus[letter] !== 'correct') {
        // Letter exists but wrong position
        newStatus[letter] = 'present';
      } else if (!wordleAnswer.includes(letter)) {
        // Letter doesn't exist in answer
        newStatus[letter] = 'absent';
      }
    }
    
    setLetterStatus(newStatus);
  }

  function handleKeyPress(key) {
    // This function will be passed to the Keyboard component
    // It will be called when a key is clicked
  }

  return (
    <div className="outermost-container">
      <Topbar />

      <div className="container-display">
        <GuessWordDisplay arrOfGuess={arrOfGuess} wordleAnswer={wordleAnswer} />
      </div>

      {/* <div className="sticky-input-form">
        <GuessInput getInput={inputGetter} disabled={disabledInput} />
      </div> */}
      
      <Keyboard letterStatus={letterStatus} onKeyPress={handleKeyPress} />

      <BasicModal openModal={showModal} wordleAnswer={wordleAnswer} />
    </div>
  );
}

export default App;
