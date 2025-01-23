import {
  ArrowBackOutlined,
  Close,
  Edit,
  FilterNoneSharp,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Menu,
  Minimize,
  MoreVert,
  Refresh,
  StarBorderOutlined,
  ZoomIn,
  ZoomOut,
} from "@mui/icons-material";
import { Divider, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import mediaQueries from "../../utils/constants";
import { useMediaQuery } from "../../hooks/use-media-query";
import "./resume.css";
import { useIntl } from "react-intl";
import messages from "./resume.messages";
import { useState, MouseEvent } from "react";
import TogglesMenu from "../Taskbar/TogglesMenu/togglesMenu";

function Resume() {
  const [settingsMenuAnchor, setSettingsMenuAnchor] =
    useState<null | HTMLElement>(null);
  const openMenu = Boolean(settingsMenuAnchor);
  const intl = useIntl();
  const isTablet = useMediaQuery(mediaQueries.tablet);

  const handleOpenMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setSettingsMenuAnchor(event.currentTarget);
  };

  return (
    <>
      <div className={`${isTablet ? "frame__desktop" : ""}app__container`}>
        {isTablet ? (
          <div className="app__navbar">
            <div className="navbar__menu">
              <IconButton onClick={handleOpenMenu}>
                <Menu />
              </IconButton>
              <h5>Menu</h5>
            </div>
            <div className="resume__tab">
              <div className="tab__name">
                <StarBorderOutlined />
                <h4>{intl.formatMessage(messages.tabTitle)}</h4>
              </div>
              <Link to="/">
                <Close fontSize="small" />
              </Link>
            </div>
            <div className="navbar__buttons">
              <Minimize className="control__minimize" />
              <FilterNoneSharp className="control__size" />
              <Link to="/" className="control__close">
                <Close />
              </Link>
            </div>
          </div>
        ) : (
          <div className="app__navigation">
            <div className="file__name">
              <Link to="/">
                <ArrowBackOutlined />
              </Link>
              <h4>{intl.formatMessage(messages.tabTitle)}</h4>
            </div>
            <div className="app__buttons">
              <Edit />
              <IconButton onClick={handleOpenMenu}>
                <MoreVert />
              </IconButton>
            </div>
          </div>
        )}

        <div className="app__screen">
          <iframe
            src="https://drive.google.com/file/d/1J5FAhypUdRfaitdyNF-SSd93yCls6CGN/preview"
            width="70%"
            height="100%"
            allow="autoplay"
            title="resume"
          ></iframe>
          {isTablet && (
            <div className="app__sidebar">
              <h5>1</h5>
              <h5>1</h5>
              <KeyboardArrowUp color="disabled" />
              <KeyboardArrowDown />
              <Divider />
              <Refresh />
              <ZoomIn />
              <ZoomOut />
            </div>
          )}
        </div>
      </div>

      {openMenu && (
        <TogglesMenu
          menuAnchor={settingsMenuAnchor}
          setMenuAnchor={setSettingsMenuAnchor}
          openMenu={openMenu}
        />
      )}
    </>
  );
}

export default Resume;
