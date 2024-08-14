// ./components/layouts/RootLayoutMobile.tsx
import { StyleSheet, View } from "react-native";
import { Stack } from "expo-router";

import ButtonCloseModal from "../buttons/ButtonCloseModal";

const RootLayoutMobile = () => {
  return (
    <View style={styles.container}>
      <Stack>
        <Stack.Screen name="index" options={{ headerTitle: "Home" }} />
        <Stack.Screen name="login" options={{ headerTitle: "Login" }} />
        <Stack.Screen name="register" options={{ headerTitle: "Register" }} />
        <Stack.Screen
          name="reset-password"
          options={{
            presentation: "modal",
            headerTitle: "Rest Password",
            headerLeft: () => <ButtonCloseModal size={22} />,
          }}
        />
      </Stack>
    </View>
  );
};

export default RootLayoutMobile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
