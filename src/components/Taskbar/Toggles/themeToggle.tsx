import { Bedtime, LightMode } from "@mui/icons-material";
import {
  ClickAwayListener,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import {
  useState,
  MouseEvent,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

type ThemeToggleType = {
  clickAway: Dispatch<SetStateAction<HTMLElement | null>>;
  vertical?: boolean;
};

function ThemeToggle({ clickAway, vertical }: ThemeToggleType) {
  const [themeToggle, setThemeToggle] = useState("");

  const handleThemeChange = (
    event: MouseEvent<HTMLElement>,
    nextTheme: string
  ) => {
    setThemeToggle(nextTheme);
    document.querySelector("html")?.setAttribute("data-theme", nextTheme);
  };

  useEffect(() => {
    const theme = document.querySelector("html")?.getAttribute("data-theme");

    theme ? setThemeToggle(theme) : setThemeToggle("dark");
  }, []);

  return (
    <ClickAwayListener onClickAway={() => clickAway(null)}>
      <ToggleButtonGroup
        value={themeToggle}
        exclusive
        orientation={vertical ? 'vertical' : 'horizontal'}
        onChange={handleThemeChange}
        aria-label="theme toggle"
      >
        <ToggleButton value="dark" aria-label="dark theme">
          <Bedtime />
        </ToggleButton>
        <ToggleButton value="light" aria-label="light theme">
          <LightMode />
        </ToggleButton>
      </ToggleButtonGroup>
    </ClickAwayListener>
  );
}

export default ThemeToggle;
