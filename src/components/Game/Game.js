import React from "react";
import GuessForm from "../GuessForm";
import GuessResults from "../GuessResults";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessesList, setGuessesList] = React.useState([]);

  function handleNewGuess(tentativeGuess) {
    setGuessesList([...guessesList, tentativeGuess]);
  }

  console.log(guessesList);

  return (
    <>
      <GuessResults guessesList={guessesList} answer={answer} />

      <GuessForm handleNewGuess={handleNewGuess} />
    </>
  );
}

export default Game;
