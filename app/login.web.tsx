// ./app/login.web.tsx
import { MouseEvent, useContext } from "react";
import { router } from "expo-router";

import { AuthContext } from "../contexts/AuthContext";
import "../styles/css/login.css";
import { useGlobalStyles } from "../styles/stylesheets/globalStyles";

const Login = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const { themeTextColor } = useGlobalStyles();

  const handleLogin = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsLoggedIn(true);
    router.push("/(drawer)/(tabs)/feed");
  };

  return (
    <div className="login-wrapper">
      <div className="contents-container">
        <p style={{ color: themeTextColor }}>Login Screen (web)</p>
        <a onClick={handleLogin} style={{ color: themeTextColor }}>
          Log in
        </a>
        <a
          href="/reset-password"
          onClick={(e) => {
            e.preventDefault();
            router.push("/reset-password");
          }}
          style={{ color: themeTextColor }}
        >
          Forgot Password?
        </a>
      </div>
    </div>
  );
};

export default Login;
