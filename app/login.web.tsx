// ./app/login.web.tsx
import { MouseEvent } from "react";
import { router } from "expo-router";

import "../styles/css/login.css";

const Login = () => {
  const handleLogin = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push("/settings");
  };

  return (
    <div className="login-wrapper">
      <div className="contents-container">
        <p>Login Screen (web)</p>
        <a onClick={handleLogin}>Log in</a>
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
