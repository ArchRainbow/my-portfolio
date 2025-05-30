import {
  ArrowBackOutlined,
  Close,
  Edit,
  KeyboardArrowDown,
  KeyboardArrowUp,
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
import Navbar from "../Navbar/navbar";

function Resume() {
  const [settingsMenuAnchor, setSettingsMenuAnchor] =
    useState<null | HTMLElement>(null);
  const openMenu = Boolean(settingsMenuAnchor);
  const intl = useIntl();
  const isTablet = useMediaQuery(mediaQueries.tablet);

  const pdfUrl =
    intl.locale === "es"
      ? "https://drive.google.com/file/d/1VYH0rzmCHTbeCeFHHERnDJ9mwXVr8v2E/preview"
      : "https://drive.google.com/file/d/1Nmc6V07uPjF5SbmmRwvWtO5VcklhJhEj/preview";

  const handleOpenMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setSettingsMenuAnchor(event.currentTarget);
  };

  const resumeTab = (
    <div className="resume__tab">
      <div className="tab__name">
        <StarBorderOutlined />
        <h4>{intl.formatMessage(messages.tabTitle)}</h4>
      </div>
      <Link to="/">
        <Close fontSize="small" />
      </Link>
    </div>
  );

  return (
    <>
      <div className={`${isTablet ? "frame__desktop" : ""}app__container`}>
        {isTablet ? (
          <Navbar
            containerClassName="app__navbar"
            isResume
            titleobject={resumeTab}
            handleOpenMenu={handleOpenMenu}
          />
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
            src={pdfUrl}
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
