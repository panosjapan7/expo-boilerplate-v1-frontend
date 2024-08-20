// ./components/forms/FormRegisterWeb.tsx
import { MouseEvent, useContext, useEffect, useState } from "react";
import { router } from "expo-router";

import { useGlobalStyles } from "../../styles/stylesheets/globalStyles";
import { Colors } from "../../styles/colors";
import "../../styles/css/form.css";
import {
  useDebouncedValidation,
  validateEmail,
  validatePassword,
  validateRepeatPassword,
} from "../../hooks/validations";
import { AuthContext } from "../../contexts/AuthContext";
import InputFormWeb from "../inputs/InputFormWeb";
import ButtonSubmitFormWeb from "../buttons/ButtonSubmitFormWeb";

const FormRegisterWeb = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const { themeHeaderTextColor, themeTextColor } = useGlobalStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [repeatPasswordErrorMessage, setRepeatPasswordErrorMessage] =
    useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [hideRepeatPassword, setHideRepeatPassword] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleRegister = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoggedIn(true);
    router.push("/(drawer)/(tabs)/feed");
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

  useDebouncedValidation(
    repeatPassword,
    (value) => validateRepeatPassword(password, value),
    setRepeatPasswordErrorMessage,
    "does not match Password"
  );

  useEffect(() => {
    setIsButtonDisabled(
      !(
        validateEmail(email) &&
        validatePassword(password) &&
        validateRepeatPassword(password, repeatPassword)
      )
    );
  }, [email, password, repeatPassword]);

  return (
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
        Register Screen (web)
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

      <InputFormWeb
        label="Repeat Password"
        value={repeatPassword}
        type="password"
        setValue={setRepeatPassword}
        errorMessage={repeatPasswordErrorMessage}
        hidePassword={hideRepeatPassword}
        setHidePassword={setHideRepeatPassword}
      />

      <ButtonSubmitFormWeb
        onClick={handleRegister}
        isDisabled={isButtonDisabled}
        caption="Register"
      />

      <div className="bottomLinksContainer">
        <a
          href="/login"
          onClick={(e) => {
            e.preventDefault();
            router.push("/login");
          }}
          style={{
            color: themeHeaderTextColor,
            textDecorationColor: themeHeaderTextColor,
          }}
        >
          Have an account? <span>Log in here</span>
        </a>
      </div>
    </div>
  );
};
export default FormRegisterWeb;
