import FormRegisterWeb from "../components/forms/FormRegisterWeb";
import "../styles/css/register.css";
import { useGlobalStyles } from "../styles/stylesheets/globalStyles";

const Register = () => {
  const { themeBackgroundColor } = useGlobalStyles();
  return (
    <div
      className="register-wrapper"
      style={{ backgroundColor: themeBackgroundColor }}
    >
      <div className="contents-container">
        <FormRegisterWeb />
      </div>
    </div>
  );
};

export default Register;
