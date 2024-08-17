// ./styles/globalStyles.ts
import { StyleSheet } from "react-native";
import { Colors } from "../colors";

export const useGlobalStyles = () => {
  const globalStyles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      backgroundColor: Colors.white,
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      backgroundColor: Colors.white,
    },

    // TEXT
    textLight: {
      fontFamily: "Inter_300Light",
      color: Colors.black,
    },
    textRegular: {
      fontFamily: "Inter_400Regular",
    },
    textMedium: {
      fontFamily: "Inter_500Medium",
    },
    textBold: {
      fontFamily: "Inter_700Bold",
    },
    textBlack: {
      fontFamily: "Inter_900Black",
    },
  });

  return { globalStyles };
};
