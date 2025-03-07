import React, { useState } from "react";
import "./GuessInput.css";

const GuessInput = ({ getInput }) => {
  const [inputWord, setInputWord] = useState();

  return (
    <>
      <form
        action="submit"
        className="guess-input-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (inputWord.length !== 5) return;

          console.log("Input:", inputWord);
          getInput(inputWord);

          setInputWord("");
        }}
      >
        <label htmlFor="guess-input">Enter your word guess</label>
        <input
          type="text"
          className="input-box"
          value={inputWord}
          maxLength={5}
          onChange={(e) => {
            setInputWord(e.target.value.toUpperCase());
          }}
        />
      </form>
    </>
  );
};

export default GuessInput;
