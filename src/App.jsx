import React, { useEffect, useState } from "react";
import "./App.css";
import GuessInput from "./components/GuessInput/GuessInput";
import GuessWordDisplay from "./components/GuessWordDisplay/GuessWordDisplay";
import Topbar from "./components/Topbar/Topbar";
import Footer from "./components/Footer/Footer";
import BasicModal from "./components/NotificationModal/NotificationModal";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  const [arrOfGuess, setArrOfGuess] = useState([]);
  const [wordleAnswer, setWordleAnswer] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [disabledInput, setDisabledInput] = useState(false);
  const [letterStatus, setLetterStatus] = useState({});
  const [numberOfGuess, setNumberOfGuess] = useState(0)
  
  useEffect(() => {
    getRandomWord();
  }, []); 
  
  function inputGetter(inputFromUser) {
    const newNumberOfGuess = numberOfGuess + 1;
    setNumberOfGuess(newNumberOfGuess);
    
    setArrOfGuess([...arrOfGuess, inputFromUser]);
    
    updateLetterStatus(inputFromUser);

    if (inputFromUser === wordleAnswer) {
      setShowModal(true);
      setDisabledInput(true);
    } else if (newNumberOfGuess >= 6) {
      setShowModal(true);
      setDisabledInput(true);
    }
  }

  function getRandomWord() {
    fetch("http://localhost:3000/random-word")
      .then((res) => res.json())
      .then((data) => {
        let randomNumber = Math.floor(Math.random() * data.words.length); 
        
        setWordleAnswer(data.words[randomNumber].toUpperCase());
        
        console.log("Answer: ", data.words[randomNumber]);
      })
      .catch((err) => console.error(err));
  }
  
  function updateLetterStatus(guess) {
    const newStatus = { ...letterStatus };

    for (let i = 0; i < guess.length; i++) {
      const letter = guess[i];
      
      if (letter === wordleAnswer[i]) {
        newStatus[letter] = 'correct';
      } else if (wordleAnswer.includes(letter) && newStatus[letter] !== 'correct') {
        newStatus[letter] = 'misplaced';
      } else if (!wordleAnswer.includes(letter)) {
        newStatus[letter] = 'incorrect';
      }
    }
    
    setLetterStatus(newStatus);
    console.log('newStatus', newStatus)
  }

  function handleKeyPress(key) {
    // This function will be passed to the Keyboard component
    // It will be called when a key is clicked
  }

  return (
    <div className="outermost-container">
      <Topbar />
      
      <div style={{display: "flex", flexDirection: "row", justifyContent:"space-evenly", alignItems: "center"}}>
        <div>
          <GuessWordDisplay arrOfGuess={arrOfGuess} wordleAnswer={wordleAnswer} />
        </div>
        
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>          
          <GuessInput getInput={inputGetter} disabled={disabledInput} />
          
          <Keyboard letterStatus={letterStatus} onKeyPress={handleKeyPress} />
        </div>
      </div>

      <BasicModal
        openModal={showModal} 
        wordleAnswer={wordleAnswer}
        numberOfGuess={numberOfGuess}
        isWin={arrOfGuess.length > 0 && arrOfGuess[arrOfGuess.length - 1] === wordleAnswer}
      />      
      
      <Footer/>
    </div>
  );
}

export default App;
