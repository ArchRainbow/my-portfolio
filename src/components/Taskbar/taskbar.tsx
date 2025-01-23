import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Popper,
  SwipeableDrawer,
  Divider,
} from "@mui/material";
import {
  ArrowBackIosRounded,
  Battery80,
  BedtimeOutlined,
  ChatBubbleOutlineSharp,
  HomeRounded,
  Menu,
  SignalCellularAlt,
  TranslateRounded,
  Vibration,
  Wifi,
} from "@mui/icons-material";
import "./taskbar.css";
import { useState, MouseEvent } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../../hooks/use-media-query";
import mediaQueries from "../../utils/constants";
import ThemeToggle from "./Toggles/themeToggle";
import LanguageToggle from "./Toggles/languageToggle";

function Taskbar() {
  const [languageAnchor, setLanguageAnchor] = useState<null | HTMLElement>(
    null
  );
  const [themeAnchor, setThemeAnchor] = useState<null | HTMLElement>(null);
  const [openTopNavbar, setOpenTopNavbar] = useState(false);

  const intl = useIntl();
  const openLanguageMenu = Boolean(languageAnchor);
  const openThemeMenu = Boolean(themeAnchor);

  const isTablet = useMediaQuery(mediaQueries.tablet);
  const drawerBleeding = 56;
  const dateToday = new Date();
  const currentDate = intl.formatDate(dateToday, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const currentTime = intl.formatDate(dateToday, {
    hour: "2-digit",
    minute: "numeric",
  });

  const handleLanguageMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setLanguageAnchor(languageAnchor ? null : event.currentTarget);
  };

  const handleThemeMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setThemeAnchor(themeAnchor ? null : event.currentTarget);
  };

  const swiperTopInfo = () => (
    <div className="swiper__top__info">
      <h4>{currentTime}</h4>
      <div className="info__icons">
        <Vibration fontSize="small" />
        <Wifi fontSize="small" />
        <SignalCellularAlt fontSize="small" />
        <Battery80 fontSize="small" />
      </div>
    </div>
  );


  return isTablet ? (
    <div className="taskbar__container">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{ top: "auto", bottom: 30 }}
          className="taskbar__content"
        >
          <Toolbar>
            <Link to="/" aria-label="Home" className="home__button">
              <HomeRounded />
            </Link>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                size="large"
                color="inherit"
                aria-label="theme menu"
                onClick={handleThemeMenu}
                className="theme__menu"
              >
                <BedtimeOutlined />
              </IconButton>
              <IconButton
                size="large"
                color="inherit"
                aria-label="language menu"
                onClick={handleLanguageMenu}
                className="language__menu"
              >
                <TranslateRounded />
              </IconButton>
              <div className="date__time">
                <h5>{currentTime}</h5>
                <h5>{currentDate}</h5>
              </div>
              <ChatBubbleOutlineSharp />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <Popper
        open={openLanguageMenu}
        anchorEl={languageAnchor}
        placement="top"
        className="language__popper"
      >
        <LanguageToggle clickAway={setLanguageAnchor} />
      </Popper>

      <Popper
        open={openThemeMenu}
        anchorEl={themeAnchor}
        placement="top"
        className="theme__popper"
      >
        <ThemeToggle clickAway={setThemeAnchor} />
      </Popper>
    </div>
  ) : (
    <>
      <SwipeableDrawer
        anchor="top"
        open={openTopNavbar}
        onClose={() => setOpenTopNavbar(false)}
        onOpen={() => setOpenTopNavbar(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{ keepMounted: true }}
        className="swiper__container"
      >
        <Box
          sx={{
            position: "absolute",
            bottom: openTopNavbar ? 17 : -drawerBleeding,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          {!openTopNavbar && swiperTopInfo()}
          <div className="swiper__puller" />
        </Box>
        <div className="swiper__content">
          {swiperTopInfo()}
          <Divider />
          <div className="content__toggles">
            <ThemeToggle clickAway={() => {}} />
            <Divider orientation="vertical" />
            <LanguageToggle clickAway={() => {}} />
          </div>
        </div>
      </SwipeableDrawer>

      <AppBar
        position="fixed"
        sx={{ top: "auto", bottom: 0 }}
        className="phone__taskbar"
      >
        <Toolbar>
          <ArrowBackIosRounded fontSize="small" />
          <Link to="/" aria-label="Home" className="phone__home__button">
            <HomeRounded fontSize="small" />
          </Link>
          <Menu fontSize="small" className="menu__button" />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Taskbar;
