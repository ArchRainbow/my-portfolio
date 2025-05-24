import { useMediaQuery } from "../../../hooks/use-media-query";
import mediaQueries from "../../../utils/constants";
import { Button, IconButton } from "@mui/material";
import { keyboardKeysTablet, keyboardKeysPhone } from "../hangmanData";
import { useState } from "react";
import "./hangmanGame.css";
import { KeyboardBackspaceRounded } from "@mui/icons-material";
import { useIntl } from "react-intl";
import messages from "../hangman.messages";

type HangmanGameProps = {
  wordToGuess: string;
  lettersToGuess: string[];
  letters: string[];
  numberOfTries: number;
  setGameStarted: (gameStarted: boolean) => void;
  onNextRound: () => void;
  compareToHiScore: (score: number) => void;
};

function HangmanGame({
  wordToGuess,
  lettersToGuess,
  letters,
  numberOfTries,
  setGameStarted,
  onNextRound,
  compareToHiScore,
}: HangmanGameProps) {
  const [pressedButtons, setPressedButtons] = useState<string[]>([]);
  const [attemptsLeft, setAttemptsLeft] = useState(numberOfTries);
  const [messageDisplay, setMessageDisplay] = useState(
    messages.messageDisplay.start
  );
  const [score, setScore] = useState(0);
  const [isRoundOver, setIsRoundOver] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const intl = useIntl();
  const isTablet = useMediaQuery(mediaQueries.tablet);
  const keyboardToShow = isTablet ? keyboardKeysTablet : keyboardKeysPhone;

  const onButtonClick = (letter: string) => {
    if (pressedButtons.includes(letter)) {
      setMessageDisplay(messages.messageDisplay.pressed);
      return;
    }
    if (attemptsLeft - 1 === 0) {
      setMessageDisplay(messages.messageDisplay.over);
      setAttemptsLeft(0);
      setIsGameOver(true);
      return;
    }

    if (wordToGuess.includes(letter)) {
      letters.forEach((l, index) => {
        if (l === letter) {
          lettersToGuess[index] = letter;
        }
      });
      if (lettersToGuess.join("") === wordToGuess) {
        setMessageDisplay(messages.messageDisplay.win);
        setScore((prev) => prev + 50);
        compareToHiScore(score + 50);
        setIsRoundOver(true);
      } else {
        setMessageDisplay(messages.messageDisplay.keepGuessing);
      }
    } else {
      setAttemptsLeft((prev) => prev - 1);
      setMessageDisplay(messages.messageDisplay.incorrectGuess);
    }
    setPressedButtons((prev) => [...prev, letter]);
  };

  const handleNextRound = () => {
    setPressedButtons([]);
    setAttemptsLeft(numberOfTries);
    setMessageDisplay(messages.messageDisplay.start);
    setIsRoundOver(false);
    onNextRound();
  };

  return (
    <div>
      <div className="game__container">
        <div className="counters__container">
          <IconButton
            onClick={() => setGameStarted(false)}
            className="back__button"
            title="Back to menu"
          >
            <KeyboardBackspaceRounded />
          </IconButton>
          <div>
            <h4>
              {intl.formatMessage(messages.game.attemptsLeft, { isTablet })}{" "}
              {attemptsLeft}/{numberOfTries}
            </h4>
            <h4>
              {intl.formatMessage(messages.game.score, { isTablet })} {score}
            </h4>
          </div>
        </div>
        {/*  <div className="image__counter">
          <img src="../../" alt="" />
        </div> */}
        <div className="game__word">
          {lettersToGuess.map((letter, index) => (
            <span key={index} className="letter__placeholder">
              {letter}
            </span>
          ))}
        </div>
        <div className="info__message">
          <div className="letters__pressed">
            <h5>{intl.formatMessage(messages.game.lettersUsed)}</h5>
            <h5>{pressedButtons}</h5>
          </div>
          <div className="message__display">
            <h5>{intl.formatMessage(messageDisplay)}</h5>
            <h5>
              {isGameOver &&
                intl.formatMessage(messages.messageDisplay.showWord, {
                  word: wordToGuess,
                })}
            </h5>
          </div>
          {(isRoundOver || isGameOver) && (
            <div className="roundOver__buttons">
              {isRoundOver && (
                <Button
                  variant="contained"
                  size="large"
                  className="next__button"
                  onClick={handleNextRound}
                >
                  {intl.formatMessage(messages.game.nextRound)}
                </Button>
              )}
              {isGameOver && (
                <Button
                  variant="outlined"
                  size="large"
                  className="quit__button"
                  onClick={() => setGameStarted(false)}
                >
                  {intl.formatMessage(messages.game.quit)}
                </Button>
              )}
            </div>
          )}
        </div>
        <div className="keyboard__container">
          {keyboardToShow.map((keyRow) => (
            <div key={keyRow.id} className="keyboard__row">
              {keyRow.row.map(({ id, letter }) => (
                <Button
                  key={id}
                  variant="outlined"
                  className="keyboard__button"
                  onClick={() => onButtonClick(letter)}
                >
                  {letter}
                </Button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HangmanGame;
