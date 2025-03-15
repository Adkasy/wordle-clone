import React from "react";
import "./GuessWordDisplay.css";
import range from "../../utils/range";
import wordChecker from "../../utils/wordCheker";

const GuessWordDisplay = ({ arrOfGuess, wordleAnswer }) => {
  return (
    <div className="row-container">
      {range(0, 6).map((_, rowIndex) => {
        let resultPerRow = arrOfGuess[rowIndex]
          ? wordChecker(arrOfGuess[rowIndex], wordleAnswer)
          : null;

        return (
          <div className="row-guess" key={rowIndex}>
            {arrOfGuess[rowIndex]
              ? arrOfGuess[rowIndex].split("").map((char, charIndex) => (
                  <div
                    className={`per-character ${
                      resultPerRow[charIndex]?.status || ""
                    }`}
                    key={charIndex}
                  >
                    {char}
                  </div>
                ))
              : range(0, 5).map((_, charIndex) => (
                  <div className="per-character" key={charIndex}></div>
                ))}
          </div>
        );
      })}
    </div>
  );
};

export default GuessWordDisplay;
