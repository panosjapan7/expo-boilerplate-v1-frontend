// ./app/login.web.tsx
import { router } from "expo-router";
import "../styles/css/login.css";

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="contents-container">
        <p>Login Screen (web)</p>
        <a
          href="/reset-password"
          onClick={(e) => {
            e.preventDefault();
            router.push("/reset-password");
          }}
        >
          Forgot Password?
        </a>
      </div>
    </div>
  );
};

export default Login;
