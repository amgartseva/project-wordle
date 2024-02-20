import React from "react";
import GuessForm from "../GuessForm";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [newGuess, setNewGuess] = React.useState("");
  return (
    <>
      <GuessForm newGuess={newGuess} setNewGuess={setNewGuess} />
    </>
  );
}

export default Game;
