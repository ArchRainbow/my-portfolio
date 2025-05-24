import { useState } from "react";
import HangmanGame from "./hangmanGame";

type HangmanGameProps = {
  wordStack: string[];
  numberOfTries: number;
  setGameStarted: (gameStarted: boolean) => void;
  compareToHiScore: (score: number) => void
};

export function HangmanContainer({
  wordStack,
  numberOfTries,
  setGameStarted,
  compareToHiScore,
}: HangmanGameProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNextRound = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <HangmanGame
      wordToGuess={wordStack[currentIndex].toUpperCase()}
      lettersToGuess={Array(wordStack[currentIndex].length).fill("_")}
      letters={Array.from(wordStack[currentIndex].toUpperCase())}
      numberOfTries={numberOfTries}
      setGameStarted={setGameStarted}
      onNextRound={onNextRound}
      compareToHiScore={compareToHiScore}
    />
  );
}
