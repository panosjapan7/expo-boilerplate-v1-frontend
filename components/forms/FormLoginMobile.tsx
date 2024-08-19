// ./components/forms/FormLoginMobile.tsx
import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Link, router } from "expo-router";

import {
  useDebouncedValidation,
  validateEmail,
  validatePassword,
} from "../../hooks/validations";
import { StatusType } from "../../types/types";
import { useGlobalStyles } from "../../styles/stylesheets/globalStyles";
import InputEmailMobile from "../inputs/InputEmailMobile";
import InputPasswordMobile from "../inputs/InputPasswordMobile";
import InputLabelMobile from "../inputs/InputLabelMobile";
import ButtonSubmitFormMobile from "../buttons/ButtonSubmitFormMobile";

const FormLoginMobile = () => {
  const { globalStyles, themeHeaderTextColor } = useGlobalStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [status, setStatus] = useState<StatusType>("idle");

  const passwordInputRef = useRef<TextInput>(null);

  const handleLogin = () => {
    setStatus("loading");
    router.replace("/(drawer)/feed");
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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {status === "loading" ? (
          <View style={globalStyles.container}>
            <ActivityIndicator size={"large"} color={themeHeaderTextColor} />
          </View>
        ) : (
          <View style={globalStyles.container}>
            {/* Email */}
            <InputLabelMobile
              caption="Email "
              errorMessage={emailErrorMessage}
            />
            <InputEmailMobile
              value={email}
              setValue={setEmail}
              goToRef={passwordInputRef}
            />

            <View style={{ marginVertical: 2 }}></View>

            {/* Password */}
            <InputLabelMobile
              caption="Password "
              errorMessage={passwordErrorMessage}
            />
            <InputPasswordMobile
              value={password}
              setValue={setPassword}
              ref={passwordInputRef}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
              returnKeyType="done"
            />

            <View style={{ marginVertical: 4 }}></View>

            <ButtonSubmitFormMobile
              onPress={handleLogin}
              isDisabled={isButtonDisabled}
              buttonText="Log in"
            />

            <View>
              <Link href="/reset-password" style={styles.link}>
                <Text style={globalStyles.textRegular}>Forgot Password?</Text>
              </Link>
            </View>
          </View>
        )}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default FormLoginMobile;

const styles = StyleSheet.create({
  link: {
    marginTop: 30,
    fontSize: 16,
    letterSpacing: 0.5,
    textDecorationLine: "underline",
  },
});
