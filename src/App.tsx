import HomePage from "./components/Homepage/homepage";
import { useMediaQuery } from "./hooks/use-media-query";
import mediaQueries from "./utils/constants";

function App() {
  const isTablet = useMediaQuery(mediaQueries.tablet);

  return (
    <div className={isTablet ? "frame__desktop" : "frame__phone"}>
      <HomePage />
    </div>
  );
}

export default App;
