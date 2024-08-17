// ./app/(drawer)/(tabs)/feed.web.tsx
import "../../../styles/css/feed.css";
import { useGlobalStyles } from "../../../styles/stylesheets/globalStyles";

const Feed = () => {
  const { themeTextColor } = useGlobalStyles();

  return (
    <div className="feed-wrapper">
      <div className="contents-container">
        <p style={{ color: themeTextColor }}>Feed Screen (web)</p>
      </div>
    </div>
  );
};

export default Feed;
