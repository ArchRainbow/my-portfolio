import {
  Close,
  FilterNoneSharp,
  KeyboardArrowDownRounded,
  Menu,
  Minimize,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import './navbar.css';

type NavbarType = {
  containerClassName: string;
  isResume?: boolean;
  titleobject: JSX.Element;
  showSettingsMenu?: boolean;
  handleOpenMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
  openSettingsMenu?: boolean;
};

function Navbar({
  containerClassName,
  isResume,
  titleobject,
  showSettingsMenu,
  handleOpenMenu,
  openSettingsMenu,
}: NavbarType) {
  return (
    <div className={containerClassName}>
      {isResume && (
        <div className="navbar__menu">
          <IconButton onClick={handleOpenMenu}>
            <Menu />
          </IconButton>
        </div>
      )}
      {titleobject}
      <div className="navbar__control">
        {showSettingsMenu && (
          <IconButton
            onClick={handleOpenMenu}
            className={`settings__icon ${openSettingsMenu ? "rotate" : ""}`}
          >
            <KeyboardArrowDownRounded />
          </IconButton>
        )}
        <Minimize className="control__minimize" />
        <FilterNoneSharp className="control__size" />
        <Link to="/" className="control__close">
          <Close />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
