import { Button, Divider, IconButton } from "@mui/material";
import { workData } from "./workData";
import "./works.css";
import {
  AddOutlined,
  Close,
  GitHub,
  Home,
  MoreVert,
  OpenInNewRounded,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../../hooks/use-media-query";
import mediaQueries from "../../utils/constants";
import { useState, MouseEvent } from "react";
import { useIntl } from "react-intl";
import messages from "./works.messages";
import TogglesMenu from "../Taskbar/TogglesMenu/togglesMenu";
import Navbar from "../Navbar/navbar";

function MyWorks() {
  const [settingsMenuAnchor, setSettingsMenuAnchor] =
    useState<null | HTMLElement>(null);
  const openSettingsMenu = Boolean(settingsMenuAnchor);
  const intl = useIntl();
  const isTablet = useMediaQuery(mediaQueries.tablet);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setSettingsMenuAnchor(event.currentTarget);
  };

  const navbarTab = (
    <div className="navbar__tab">
      <h4>{intl.formatMessage(messages.tabTitle)}</h4>
      <Link to="/">
        <Close fontSize="small" />
      </Link>
    </div>
  );

  return (
    <>
      <div
        className={`works__container ${
          isTablet ? "frame__desktop" : "frame__phone"
        } `}
      >
        {isTablet ? (
          <Navbar
            containerClassName="works__navbar"
            titleobject={navbarTab}
            showSettingsMenu
            handleOpenMenu={handleClick}
            openSettingsMenu={openSettingsMenu}
          />
        ) : (
          <div className="works__navigation">
            <Link to="/">
              <Home />
            </Link>
            <h4 className="link__page">{intl.formatMessage(messages.url)}</h4>
            <AddOutlined />
            <h5 className="tabs__number">17</h5>
            <IconButton onClick={handleClick}>
              <MoreVert />
            </IconButton>
          </div>
        )}
        <div className="works__screen">
          <h1>{intl.formatMessage(messages.title)}</h1>
          <div className="cards__container">
            {workData.map(
              ({
                id,
                name,
                description,
                image,
                link,
                github,
                cardClass,
                titleTop,
              }) => (
                <div key={id} className={`project__container ${cardClass}`}>
                  {titleTop && (
                    <div className="card__name">{intl.formatMessage(name)}</div>
                  )}
                  <img
                    src={image}
                    className="page__preview"
                    alt="page preview"
                  />
                  <div className="card__content">
                    {!titleTop && (
                      <div className="card__name">
                        {intl.formatMessage(name)}
                      </div>
                    )}
                    <div className="card__description">
                      {intl.formatMessage(description)}
                    </div>
                    <div className="card__buttons">
                      <Button
                        aria-label="Visit"
                        endIcon={<OpenInNewRounded />}
                        variant="contained"
                        className="button__visit"
                        onClick={() => window.open(link)}
                      >
                        {intl.formatMessage(messages.visitButton)}
                      </Button>
                      <Divider />
                      <Button
                        aria-label="Github"
                        endIcon={<GitHub />}
                        variant="outlined"
                        className="button__github"
                        onClick={() => window.open(github)}
                      >
                        Github
                      </Button>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {openSettingsMenu && (
        <TogglesMenu
          menuAnchor={settingsMenuAnchor}
          setMenuAnchor={setSettingsMenuAnchor}
          openMenu={openSettingsMenu}
        />
      )}
    </>
  );
}

export default MyWorks;
