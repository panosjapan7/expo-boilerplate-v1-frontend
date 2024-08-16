// ./components/layouts/RootLayoutMobile.tsx
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SpashScreen from "expo-splash-screen";
import {
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import ButtonCloseModal from "../buttons/ButtonCloseModal";

SpashScreen.preventAutoHideAsync();

const RootLayoutMobile = () => {
  const [fontsLoaded, error] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Inter_900Black,
  });

  useEffect(() => {
    if (fontsLoaded || error) {
      SpashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

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
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
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
