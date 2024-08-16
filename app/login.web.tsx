// ./app/login.web.tsx
import { MouseEvent, useContext } from "react";
import { router } from "expo-router";

import { AuthContext } from "../contexts/AuthContext";
import "../styles/css/login.css";

const Login = () => {
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleLogin = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsLoggedIn(true);
    router.push("/(drawer)/(tabs)/feed");
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
