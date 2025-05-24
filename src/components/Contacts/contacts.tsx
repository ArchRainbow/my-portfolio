import { MouseEvent, useState } from "react";
import {
  ContactsRounded,
  Email,
  GitHub,
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded,
  LinkedIn,
  OpenInNewRounded,
} from "@mui/icons-material";
import { useMediaQuery } from "../../hooks/use-media-query";
import mediaQueries from "../../utils/constants";
import { Button, Divider } from "@mui/material";
import "./contacts.css";
import { useIntl } from "react-intl";
import messages from "./contacts.messages";
import TogglesMenu from "../Taskbar/TogglesMenu/togglesMenu";
import Navbar from "../Navbar/navbar";

type ContactDataType = {
  id: number;
  icon: JSX.Element;
  title: string;
  url: string;
  buttonText: any;
};

const contactsData: ContactDataType[] = [
  {
    id: 0,
    icon: <GitHub />,
    title: "github",
    url: "https://github.com/ArchRainbow?tab=repositories",
    buttonText: messages.data.github,
  },
  {
    id: 1,
    icon: <Email />,
    title: "email",
    url: "mailto:kren.funes17@gmail.com",
    buttonText: messages.data.email,
  },
  {
    id: 2,
    icon: <LinkedIn />,
    title: "linkedIn",
    url: "https://www.linkedin.com/in/karen-funes-7a5279179/",
    buttonText: messages.data.linkedin,
  },
];

function Contacts() {
  const [settingsMenuAnchor, setSettingsMenuAnchor] =
    useState<null | HTMLElement>(null);
  const [activeCard, setActiveCard] = useState(1);
  const openSettingsMenu = Boolean(settingsMenuAnchor);
  const intl = useIntl();
  const isTablet = useMediaQuery(mediaQueries.tablet);

  const handleOpenMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setSettingsMenuAnchor(event.currentTarget);
  };

  const handleNextClick = () => {
    activeCard + 1 > contactsData.length - 1
      ? setActiveCard(0)
      : setActiveCard(activeCard + 1);
  };

  const handlePrevClick = () => {
    activeCard - 1 < 0
      ? setActiveCard(contactsData.length - 1)
      : setActiveCard(activeCard - 1);
  };

  const navbarTitle = (
    <div className="navbar__title">
      <ContactsRounded />
      <h3>{intl.formatMessage(messages.programTitle)}</h3>
    </div>
  );

  const cardList = ({ id, icon, title, url, buttonText }: ContactDataType) => (
    <div
      className={`contact__card__content ${title} ${!isTablet && "active"}`}
      id="cards"
      key={id}
    >
      <div className="card__front">{icon}</div>
      <div className="card__back">
        {icon}
        <div className="content__description">
          <h3>{title}</h3>
          <Divider />
          <Button
            variant="outlined"
            endIcon={<OpenInNewRounded />}
            onClick={() => window.open(url)}
          >
            {intl.formatMessage(buttonText)}
          </Button>
        </div>
        {icon}
      </div>
    </div>
  );

  return (
    <>
      <div
        className={`contacts__container ${
          isTablet ? "frame__desktop" : "frame__phone"
        }`}
      >
        <Navbar
          containerClassName="contacts__navbar"
          titleobject={navbarTitle}
          showSettingsMenu
          handleOpenMenu={handleOpenMenu}
          openSettingsMenu={openSettingsMenu}
        />

        <div className="contacts__screen">
          <h3 className="contacts__title">
            {intl.formatMessage(messages.title)}
          </h3>

          <div className="contact__cards__container">
            {isTablet
              ? contactsData.map(({ id, icon, title, url, buttonText }) =>
                  cardList({ id, icon, title, url, buttonText })
                )
              : cardList(contactsData[activeCard])}

            {!isTablet && (
              <div className="mobile__buttons">
                <Button
                  onClick={handlePrevClick}
                  size="large"
                  className="back__button"
                >
                  <KeyboardArrowLeftRounded />
                </Button>
                <Button
                  onClick={handleNextClick}
                  size="large"
                  className="next__button"
                >
                  <KeyboardArrowRightRounded />
                </Button>
              </div>
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

export default Contacts;
