// ./components/forms/FormLoginWeb.tsx
import { MouseEvent, useContext, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { router } from "expo-router";

import { useGlobalStyles } from "../../styles/stylesheets/globalStyles";
import { Colors } from "../../styles/colors";
import "../../styles/css/form.css";
import {
  useDebouncedValidation,
  validateEmail,
  validatePassword,
} from "../../hooks/validations";
import { AuthContext } from "../../contexts/AuthContext";
import { StatusType } from "../../types/types";
import InputFormWeb from "../inputs/InputFormWeb";
import ButtonSubmitFormWeb from "../buttons/ButtonSubmitFormWeb";

const FormLoginWeb = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const { themeHeaderTextColor, themeTextColor } = useGlobalStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [hidePassword, setHidePassword] = useState(true);
  const [status, setStatus] = useState<StatusType>("idle");

  const handleLogin = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStatus("loading");
    setIsLoggedIn(true);
    router.push("/(drawer)/(tabs)/feed");
    setEmail("");
    setPassword("");
    setStatus("idle");
  };

  useDebouncedValidation(
    email,
    validateEmail,
    setEmailErrorMessage,
    "is invalid"
  );
  useDebouncedValidation(
    password,
    validatePassword,
    setPasswordErrorMessage,
    "must be at least 6 characters"
  );

  useEffect(() => {
    setIsButtonDisabled(!(validateEmail(email) && validatePassword(password)));
  }, [email, password]);

  return (
    <>
      {status === "loading" ? (
        <ActivityIndicator size={"large"} color={themeHeaderTextColor} />
      ) : (
        <div
          className="form-container"
          style={{
            borderColor: Colors.gray300,
            borderWidth: 1,
            borderStyle: "solid",
          }}
        >
          <p
            className="form-header"
            style={{
              color: themeTextColor,
            }}
          >
            Login Screen (web)
          </p>
          <InputFormWeb
            label="Email"
            value={email}
            type="email"
            setValue={setEmail}
            errorMessage={emailErrorMessage}
          />
          <InputFormWeb
            label="Password"
            value={password}
            type="password"
            setValue={setPassword}
            errorMessage={passwordErrorMessage}
            hidePassword={hidePassword}
            setHidePassword={setHidePassword}
          />

          <ButtonSubmitFormWeb
            onClick={handleLogin}
            isDisabled={isButtonDisabled}
            caption="Log in"
          />

          <div className="bottomLinksContainer">
            <a
              href="/reset-password"
              onClick={(e) => {
                e.preventDefault();
                router.push("/reset-password");
              }}
              style={{
                color: themeHeaderTextColor,
                textDecorationColor: themeHeaderTextColor,
              }}
            >
              Forgot Password?
            </a>
            <a
              href="/register"
              onClick={(e) => {
                e.preventDefault();
                router.push("/register");
              }}
              style={{
                color: themeHeaderTextColor,
                textDecorationColor: themeHeaderTextColor,
              }}
            >
              Don't have an account?{" "}
              <span className="bottomLink-bold">Register here</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
export default FormLoginWeb;
