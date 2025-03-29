import React from 'react';
import './Keyboard.css';

const Keyboard = ({ letterStatus, onKeyPress }) => {
  const keyboardRows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ];

  const handleKeyClick = (key) => {
    onKeyPress(key);
  };

  return (
    <div className="keyboard-container">
      {keyboardRows.map((row, rowIndex) => (
        <div className="keyboard-row" key={rowIndex}>
          {row.map((key) => {
            const status = letterStatus[key] || '';
            const displayKey = key;
            
            return (
              <button
                key={key}
                className={`keyboard-key ${status}`}
                onClick={() => handleKeyClick(key)}
              >
                {displayKey}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;