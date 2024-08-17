// ./app/register.web.tsx
import "../styles/css/register.css";
import { useGlobalStyles } from "../styles/stylesheets/globalStyles";

const Register = () => {
  const { themeTextColor } = useGlobalStyles();

  return (
    <div className="register-wrapper">
      <div className="contents-container">
        <p style={{ color: themeTextColor }}>Register Screen (web)</p>
      </div>
    </div>
  );
};

export default Register;
