import React from "react";
import GuessForm from "../GuessForm";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  function handleAddItem(guess) {
    const newItem = {
      name: guess,
      id: Math.random(),
    };

    const nextItems = [...guessList, newItem];
    setGuessList(nextItems);
  }

  return (
    <>
      <div className="guess-results">
        {guessList.map(({ id, name }) => (
          <p key={id} className="guess">
            {name}
          </p>
        ))}
      </div>

      <GuessForm handleAddItem={handleAddItem} />
    </>
  );
}

export default Game;
