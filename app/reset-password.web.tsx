// ./app/reset-password.web.tsx
import "../styles/css/reset-password.css";
import { useGlobalStyles } from "../styles/stylesheets/globalStyles";

const ResetPassword = () => {
  const { themeTextColor } = useGlobalStyles();

  return (
    <div className="resetPassword-wrapper">
      <div className="contents-container">
        <p style={{ color: themeTextColor }}>Reset Password Screen (web)</p>
      </div>
    </div>
  );
};

export default ResetPassword;
