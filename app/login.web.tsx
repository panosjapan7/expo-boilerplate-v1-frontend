// ./client/app/login.web.tsx
import FormLoginWeb from "../components/forms/FormLoginWeb";
import "../styles/css/login.css";
import { useGlobalStyles } from "../styles/stylesheets/globalStyles";

const Login = () => {
  const { themeBackgroundColor } = useGlobalStyles();

  return (
    <div
      className="login-wrapper"
      style={{ backgroundColor: themeBackgroundColor }}
    >
      <div className="contents-container">
        <FormLoginWeb />
      </div>
    </div>
  );
};

export default Login;
