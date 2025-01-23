import {
  ClickAwayListener,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import {
  MouseEvent,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import { LocaleContext } from "../../../translations/localeContext";

type LanguageToggleType = {
  clickAway: Dispatch<SetStateAction<HTMLElement | null>>;
  vertical?: boolean;
};

function LanguageToggle({ clickAway, vertical }: LanguageToggleType) {
  const { locale, setLocale } = useContext(LocaleContext)

  const handleLanguageChange = (
    event: MouseEvent<HTMLElement>,
    nextLanguage: string
  ) => {
    setLocale(nextLanguage)
  };

  return (
    <ClickAwayListener onClickAway={() => clickAway(null)}>
      <ToggleButtonGroup
        value={locale}
        exclusive
        orientation={vertical ? 'vertical' : 'horizontal'}
        onChange={handleLanguageChange}
        aria-label="language-toggle"
        className="language__toggle"
      >
        <ToggleButton value="en" aria-label="english language">
          <h4>EN</h4>
        </ToggleButton>
        <ToggleButton value="es" aria-label="spanish language">
          <h4>ES</h4>
        </ToggleButton>
      </ToggleButtonGroup>
    </ClickAwayListener>
  );
}

export default LanguageToggle;
