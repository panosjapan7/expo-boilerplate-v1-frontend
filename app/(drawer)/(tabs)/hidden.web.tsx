// ./app/(drawer)/(tabs)/hidden.web.tsx
import "../../../styles/css/hidden.css";
import { useGlobalStyles } from "../../../styles/stylesheets/globalStyles";

const Hidden = () => {
  const { themeTextColor } = useGlobalStyles();

  return (
    <div className="hidden-wrapper">
      <div className="contents-container">
        <p style={{ color: themeTextColor }}>Hidden Screen (web)</p>
      </div>
    </div>
  );
};

export default Hidden;
