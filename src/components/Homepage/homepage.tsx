import "./homepage.css";
import Taskbar from "../Taskbar/taskbar";
import { fixedIcons, homeIconsDesktop } from "./homeIcons";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../../hooks/use-media-query";
import mediaQueries from "../../utils/constants";
import messages from "./homepage.messages";
import { useIntl } from "react-intl";

function HomePage() {
  const intl = useIntl();
  const isTablet = useMediaQuery(mediaQueries.tablet);
  const homeIcons = isTablet ? homeIconsDesktop : fixedIcons;

  return (
    <div className="homepage__container">
      <div className="presentation__container">
        <div className="homepage__icons">
          {homeIcons.map(({ id, icon, text, link }) => (
            <div className="icon__grid" key={id}>
              <Link to={link ?? "/"}>
                <img src={icon} alt={icon.toString()} />
                {text && <h4>{intl.formatMessage(text)}</h4>}
              </Link>
            </div>
          ))}
        </div>
        <div className="introduction__text">
          <h1>{intl.formatMessage(messages.introduction.hello)}</h1>
          <h3>{intl.formatMessage(messages.introduction.name)} Karen</h3>
          <h4>{intl.formatMessage(messages.introduction.description)}</h4>
        </div>
      </div>
      <Taskbar />
    </div>
  );
}

export default HomePage;
