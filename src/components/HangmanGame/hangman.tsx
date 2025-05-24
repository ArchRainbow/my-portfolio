import { useMediaQuery } from "../../hooks/use-media-query";
import mediaQueries from "../../utils/constants";
import { useState, MouseEvent } from "react";
import {
  difficultyLevels,
  wordsToGuessEN,
  wordsToGuessES,
} from "./hangmanData";
import StartScreen from "./StartScreen/startScreen";
import { HangmanContainer } from "./GameScreen/hangmanContainer";
import "./hangman.css";
import TogglesMenu from "../Taskbar/TogglesMenu/togglesMenu";
import { useIntl } from "react-intl";
import messages from "./hangman.messages";
import Navbar from "../Navbar/navbar";

function HangmanIndex() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [guesses, setGuesses] = useState(difficultyLevels[0].numberOfGuesses);
  const [gameStarted, setGameStarted] = useState(false);
  const [hiScore, setHiScore] = useState(
    localStorage.getItem("hiScore")
      ? JSON.parse(localStorage.getItem("hiScore")!)
      : 0
  );
  const [shuffledStack, setShuffledStack] = useState<string[]>([]);
  const [settingsMenuAnchor, setSettingsMenuAnchor] =
    useState<null | HTMLElement>(null);
  const openSettingsMenu = Boolean(settingsMenuAnchor);
  const intl = useIntl();
  const isTablet = useMediaQuery(mediaQueries.tablet);

  const handleOpenMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setSettingsMenuAnchor(event.currentTarget);
  };

  const compareToHiScore = (score: number) => {
    if (score > hiScore) {
      localStorage.setItem("hiScore", JSON.stringify(score));
      setHiScore(score);
    }
  };

  const onStartGame = () => {
    const stackToUse = intl.locale === "en" ? wordsToGuessEN : wordsToGuessES;

    setShuffledStack((prev) => {
      const newStack = [...stackToUse[categoryIndex]];
      for (let i = newStack.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newStack[i], newStack[j]] = [newStack[j], newStack[i]];
      }
      return newStack;
    });

    setGameStarted(true);
  };

  const navbarTitle = (
    <div className="navbar__title">
      <h3>{intl.formatMessage(messages.title)}</h3>
    </div>
  );

  return (
    <div
      className={`hangmanIndex__container ${
        isTablet ? "frame__desktop" : "frame__phone"
      }`}
    >
      <Navbar
        containerClassName="game__navbar"
        titleobject={navbarTitle}
        showSettingsMenu={!gameStarted}
        handleOpenMenu={handleOpenMenu}
        openSettingsMenu={openSettingsMenu}
      />

      <div className="hiScore__container">
        <h3>
          {intl.formatMessage(messages.hiScore)} {hiScore}
        </h3>
      </div>

      {!gameStarted ? (
        <StartScreen
          setCategoryIndex={setCategoryIndex}
          setGuess={setGuesses}
          onGameStart={onStartGame}
        />
      ) : (
        <HangmanContainer
          wordStack={shuffledStack}
          numberOfTries={guesses}
          setGameStarted={setGameStarted}
          compareToHiScore={compareToHiScore}
        />
      )}

      {openSettingsMenu && (
        <TogglesMenu
          menuAnchor={settingsMenuAnchor}
          setMenuAnchor={setSettingsMenuAnchor}
          openMenu={openSettingsMenu}
        />
      )}
    </div>
  );
}

export default HangmanIndex;
