import React from "react";

function GuessForm({ handleNewGuess }) {
  const [newGuess, setNewGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleNewGuess(newGuess);
        setNewGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="Please input 5 characters"
        value={newGuess}
        onChange={(event) => {
          const typedGuess = event.target.value.toUpperCase();
          setNewGuess(typedGuess);
        }}
      />
    </form>
  );
}

export default GuessForm;
