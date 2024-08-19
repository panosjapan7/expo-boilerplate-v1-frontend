// ./app/reset-password.tsx
import { Platform, StatusBar } from "react-native";

import { useThemeContext } from "../contexts/ThemeContext";
import FormResetPasswordMobile from "../components/forms/FormResetPasswordMobile";

const ResetPassword = () => {
  const { theme } = useThemeContext();

  return (
    <>
      <StatusBar
        barStyle={
          Platform.OS === "ios"
            ? "light-content"
            : theme === "light"
            ? "dark-content"
            : "light-content"
        }
        key={theme}
      />
      <FormResetPasswordMobile />
    </>
  );
};

export default ResetPassword;
