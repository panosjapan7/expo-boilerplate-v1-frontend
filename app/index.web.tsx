// ./app/index.web.tsx
import "../styles/css/index.css";
import { useGlobalStyles } from "../styles/stylesheets/globalStyles";

const Home = () => {
  const { themeTextColor } = useGlobalStyles();
  return (
    <div className="home-wrapper">
      <div className="contents-container">
        <p className="textBlack" style={{ color: themeTextColor }}>
          Home Screen (web)
        </p>
      </div>
    </div>
  );
};

export default Home;
