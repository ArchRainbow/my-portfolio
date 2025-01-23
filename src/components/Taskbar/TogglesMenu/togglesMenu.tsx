import { Menu, MenuItem } from "@mui/material";
import LanguageToggle from "../Toggles/languageToggle";
import ThemeToggle from "../Toggles/themeToggle";
import { Dispatch, SetStateAction } from "react";
import "../taskbar.css";

type TogglesMenuType = {
  menuAnchor: null | HTMLElement;
  openMenu: boolean;
  setMenuAnchor: Dispatch<SetStateAction<null | HTMLElement>>;
};

function TogglesMenu({ menuAnchor, setMenuAnchor, openMenu }: TogglesMenuType) {
  return (
    <Menu
      open={openMenu}
      anchorEl={menuAnchor}
      onClose={() => setMenuAnchor(null)}
      aria-label="Settings menu"
      className="settings__menu"
    >
      <MenuItem>
        <ThemeToggle clickAway={() => {}} />
      </MenuItem>
      <MenuItem>
        <LanguageToggle clickAway={() => {}} />
      </MenuItem>
    </Menu>
  );
}

export default TogglesMenu;
