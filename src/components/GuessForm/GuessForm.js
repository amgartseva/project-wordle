import React from "react";

function GuessForm({ newGuess, setNewGuess }) {
  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          console.log({ guess: newGuess.toUpperCase() });
          setNewGuess("");
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          pattern=".{5}"
          value={newGuess}
          onChange={(event) => {
            setNewGuess(event.target.value);
          }}
        />
      </form>
    </>
  );
}

export default GuessForm;
