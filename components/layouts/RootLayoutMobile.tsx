// ./components/layouts/RootLayoutMobile.tsx
import { useEffect } from "react";
import { StatusBar, View } from "react-native";
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

import { useThemeContext } from "../../contexts/ThemeContext";
import { Colors } from "../../styles/colors";
import { useGlobalStyles } from "../../styles/stylesheets/globalStyles";
import ButtonCloseModal from "../buttons/ButtonCloseModal";
import ButtonTheme from "../buttons/ButtonTheme";

SpashScreen.preventAutoHideAsync();

const StatusBarComponent = () => {
  const { theme } = useThemeContext();

  return (
    <StatusBar
      barStyle={theme === "light" ? "dark-content" : "light-content"}
      key={theme} // the key prop tells React to re-render the component whenever the key prop changes
    />
  );
};

const ThemeStyledStack = () => {
  const { theme } = useThemeContext();
  const { themeHeaderTextColor } = useGlobalStyles();

  const screenOptions = {
    headerShadowVisible: false,
    headerRight: () => <ButtonTheme size={22} color={themeHeaderTextColor} />,
    headerStyle: {
      backgroundColor: theme === "light" ? Colors.white : Colors.gray600,
    },
    headerTitleStyle: {
      color: theme === "light" ? Colors.black : Colors.gray100,
    },
    headerTintColor: theme === "light" ? Colors.black : Colors.gray100,
  };

  return (
    <>
      <Stack screenOptions={screenOptions}>
        <Stack.Screen name="index" options={{ headerTitle: "Home" }} />
        <Stack.Screen name="login" options={{ headerTitle: "Login" }} />
        <Stack.Screen name="register" options={{ headerTitle: "Register" }} />
        <Stack.Screen
          name="reset-password"
          options={{
            presentation: "modal",
            headerTitle: "Rest Password",
            headerLeft: () => (
              <ButtonCloseModal size={22} color={themeHeaderTextColor} />
            ),
          }}
        />
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

const RootLayoutMobile = () => {
  const [fontsLoaded, error] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Inter_900Black,
  });
  const { globalStyles } = useGlobalStyles();

  useEffect(() => {
    if (fontsLoaded || error) {
      SpashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBarComponent />
      <View style={globalStyles.rootContainer}>
        <ThemeStyledStack />
      </View>
    </>
  );
};

export default RootLayoutMobile;
