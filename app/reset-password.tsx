// ./app/reset-password.tsx
import { Platform, StatusBar, Text, View } from "react-native";

import { useGlobalStyles } from "../styles/stylesheets/globalStyles";

const ResetPassword = () => {
  const { globalStyles } = useGlobalStyles();

  return (
    <>
      <StatusBar
        barStyle={Platform.OS === "ios" ? "light-content" : "dark-content"}
      />
      <View style={globalStyles.container}>
        <Text style={globalStyles.textBlack}>Reset Password Screen</Text>
      </View>
    </>
  );
};

export default ResetPassword;
