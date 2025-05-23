import {
  Button,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import { useIntl } from "react-intl";
import "./startScreen.css";
import { categories, difficultyLevels } from "../hangmanData";
import messages from "../hangman.messages";
import { useState } from "react";

type StartScreenProps = {
  setCategoryIndex: (index: number) => void;
  setGuess: (guesses: number) => void;
  onGameStart: () => void;
};
type FormatMessage = {
  id: string;
  defaultMessage: string;
};

function StartScreen({
  setCategoryIndex,
  setGuess,
  onGameStart,
}: StartScreenProps) {
  const [category, setCategory] = useState(categories[0].name);
  const [difficulty, setDifficulty] = useState(difficultyLevels[0].level);
  const intl = useIntl();

  const handleSetDifficulty = (
    numberOfGuesses: number,
    level: FormatMessage
  ) => {
    setDifficulty(level);
    setGuess(numberOfGuesses);
  };

  const handleSetCategory = (id: number, name: FormatMessage) => {
    setCategory(name);
    setCategoryIndex(id - 1);
  };

  return (
    <div>
      <div className="gameStart__container">
        <h1 className="start__title">
          {intl.formatMessage(messages.startScreen.title)}
        </h1>
        <div className="start__description">
          <p>{intl.formatMessage(messages.startScreen.description1)}</p>
          <p>{intl.formatMessage(messages.startScreen.description2)}</p>
        </div>
        <div className="start__options">
          <div className="options__select">
            <FormControl>
              <Select
                id="category"
                value={intl.formatMessage(category)}
                label="Category"
                variant="standard"
                autoWidth
              >
                {categories.map(({ id, name }) => (
                  <MenuItem
                    key={id}
                    value={intl.formatMessage(name)}
                    className="category__item"
                    onClick={() => handleSetCategory(id, name)}
                    style={{ width: "140px" }}
                  >
                    {intl.formatMessage(name)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <Select
                id="difficulty"
                value={intl.formatMessage(difficulty)}
                label="Difficulty"
                variant="standard"
                autoWidth
              >
                {difficultyLevels.map(({ id, level, numberOfGuesses }) => (
                  <MenuItem
                    key={id}
                    value={intl.formatMessage(level)}
                    onClick={() => handleSetDifficulty(numberOfGuesses, level)}
                    style={{ width: "130px" }}
                  >
                    {intl.formatMessage(level)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <Button
            variant="outlined"
            className="start__button"
            onClick={onGameStart}
          >
            {intl.formatMessage(messages.startScreen.start)}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StartScreen;
