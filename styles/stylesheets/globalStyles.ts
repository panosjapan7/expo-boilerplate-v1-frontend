// ./styles/globalStyles.ts
import { StyleSheet } from "react-native";
import { useThemeContext } from "../../contexts/ThemeContext";
import { Colors } from "../colors";

export const useGlobalStyles = () => {
  const { theme } = useThemeContext();

  // SCREENS
  const themeBackgroundColor =
    theme === "light" ? Colors.white : Colors.gray600;

  // TEXT
  const tabBarItemInactiveColor = Colors.gray100;
  const themeHeaderTextColor =
    theme === "light" ? Colors.black : Colors.gray100;
  const themeTextColor = theme === "light" ? Colors.black : Colors.white;

  const globalStyles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      backgroundColor: themeBackgroundColor,
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      backgroundColor: themeBackgroundColor,
    },

    // TEXT
    textLight: {
      fontFamily: "Inter_300Light",
      color: themeTextColor,
    },
    textRegular: {
      fontFamily: "Inter_400Regular",
      color: themeTextColor,
    },
    textMedium: {
      fontFamily: "Inter_500Medium",
      color: themeTextColor,
    },
    textBold: {
      fontFamily: "Inter_700Bold",
      color: themeTextColor,
    },
    textBlack: {
      fontFamily: "Inter_900Black",
      color: themeTextColor,
    },
  });

  return {
    globalStyles,
    tabBarItemInactiveColor,
    themeBackgroundColor,
    themeHeaderTextColor,
    themeTextColor,
  };
};
