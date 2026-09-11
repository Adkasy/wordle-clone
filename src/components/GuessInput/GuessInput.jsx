import React from "react";
import "./GuessInput.css";

const GuessInput = ({ value, onSubmit, disabled }) => {
  return (
    <div className="guess-input-form">
      <label className="guess-input-label">Enter your word guess</label>

      <div className="guess-input-field-wrapper">
        <input
          type="text"
          className="input-box"
          value={value}
          readOnly
          disabled={disabled}
        />
        <button
          type="button"
          onClick={onSubmit}
          className="submit-button"
          disabled={disabled}
        >
          ↵
        </button>
      </div>
    </div>
  );
};

export default GuessInput;
