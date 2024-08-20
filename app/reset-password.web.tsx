// ./client/app/reset-password.web.tsx
import { useGlobalStyles } from "../styles/stylesheets/globalStyles";
import "../styles/css/reset-password.css";
import FormResetPasswordWeb from "../components/forms/FormResetPasswordWeb";

const ResetPassword = () => {
  const { themeBackgroundColor } = useGlobalStyles();

  return (
    <div
      className="resetPassword-wrapper"
      style={{ backgroundColor: themeBackgroundColor }}
    >
      <div className="contents-container">
        <FormResetPasswordWeb />
      </div>
    </div>
  );
};

export default ResetPassword;
