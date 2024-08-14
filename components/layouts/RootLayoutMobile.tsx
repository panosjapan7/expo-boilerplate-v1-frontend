// ./components/layouts/RootLayoutMobile.tsx
import { StyleSheet, View } from "react-native";
import { Stack } from "expo-router";

const RootLayoutMobile = () => {
  return (
    <View style={styles.container}>
      <Stack>
        <Stack.Screen name="index" options={{ headerTitle: "Home" }} />
        <Stack.Screen name="login" options={{ headerTitle: "Login" }} />
        <Stack.Screen name="register" options={{ headerTitle: "Register" }} />
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
