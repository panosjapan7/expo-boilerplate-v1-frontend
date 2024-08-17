// ./app/(drawer)/settings.web.tsx
import "../../styles/css/settings.css";
import { useGlobalStyles } from "../../styles/stylesheets/globalStyles";

const Settings = () => {
  const { themeTextColor } = useGlobalStyles();

  return (
    <div className="settings-wrapper">
      <div className="contents-container">
        <p style={{ color: themeTextColor }}>Settings Screen (web)</p>
      </div>
    </div>
  );
};

export default Settings;
