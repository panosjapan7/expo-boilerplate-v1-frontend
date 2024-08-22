// ./app/(drawer)/(tabs)/profile.web.tsx
import "../../../styles/css/profile.css";
import { useGlobalStyles } from "../../../styles/stylesheets/globalStyles";

const Profile = () => {
  const { themeTextColor } = useGlobalStyles();

  return (
    <div className="profile-wrapper">
      <div className="contents-container">
        <p style={{ color: themeTextColor }}>Profile Screen (web)</p>
      </div>
    </div>
  );
};

export default Profile;
