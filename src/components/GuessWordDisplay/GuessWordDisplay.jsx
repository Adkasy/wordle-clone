import React from "react";
import "./GuessWordDisplay.css";
import range from "../../utils/range";

const GuessWordDisplay = ({ arrOfGuess }) => {
  return (
    <div className="row-container">
      {range(0, 6).map((_, rowIndex) => (
        <div className="row-guess" key={rowIndex}>
          {arrOfGuess[rowIndex] // Jika ada tebakan di index ini, gunakan split untuk membagi jadi karakter
            ? arrOfGuess[rowIndex].split("").map((char, charIndex) => (
                <div className="per-character" key={charIndex}>
                  {char}
                </div>
              ))
            : range(0, 5).map((_, charIndex) => (
                <div className="per-character" key={charIndex}></div>
              ))}
        </div>
      ))}
    </div>
  );
};

export default GuessWordDisplay;
