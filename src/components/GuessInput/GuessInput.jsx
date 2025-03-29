import React, { useState } from "react";
import "./GuessInput.css";
import { InputAdornment, TextField } from "@mui/material";

const GuessInput = ({ getInput, disabled }) => {
  const [inputWord, setInputWord] = useState();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputWord && inputWord.length === 5) {
      getInput(inputWord);
      setInputWord("");
    }
  };

  return (
    <>
      <form
        action="submit"
        className="guess-input-form"
        onSubmit={handleSubmit}
      >
        <label style={{fontWeight: "bold", fontSize: "25px", marginBottom: "12.5px"}}>Enter your word guess</label>
        
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", position: "relative"}}>          
          <input
            autoFocus
            type="text"
            className="input-box"
            value={inputWord}
            maxLength={5}
            disabled={disabled}
            onChange={(e) => {
              setInputWord(e.target.value.toUpperCase());
            }}
          />
          <button onClick={handleSubmit} className="submit-button">
            ↵
          </button>
        </div>
        {/* <TextField
          value={inputWord}
          onChange={(e) => setInputWord(e.target.value.toUpperCase())}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <button
                  onClick={handleSubmit}
                  style={{cursor: 'pointer'}}
                >
                  ↵
                </button>
              </InputAdornment>
            ),
          }}
        /> */}
      </form>
    </>
  );
};

export default GuessInput;
