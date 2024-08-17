// ./app/reset-password.tsx
import { Platform, StatusBar, Text, View } from "react-native";

import { useThemeContext } from "../contexts/ThemeContext";
import { useGlobalStyles } from "../styles/stylesheets/globalStyles";

const ResetPassword = () => {
  const { theme } = useThemeContext();
  const { globalStyles } = useGlobalStyles();

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
      <View style={globalStyles.container}>
        <Text style={globalStyles.textBlack}>Reset Password Screen</Text>
      </View>
    </>
  );
};

export default ResetPassword;
