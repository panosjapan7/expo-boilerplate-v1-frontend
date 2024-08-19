// ./styles/globalStyles.ts
import { StyleSheet } from "react-native";
import { useThemeContext } from "../../contexts/ThemeContext";
import { Colors } from "../colors";

export const useGlobalStyles = () => {
  const { theme } = useThemeContext();

  // BORDER
  const borderRadius = 5;
  const borderWidth = 1;

  // BUTTON
  const buttonBackgroundColor =
    theme === "light" ? Colors.gray600 : Colors.gray400;
  const buttonBorderColor = theme === "light" ? Colors.black : Colors.gray100;
  const buttonBorderRadius = 5;
  const buttonBorderStyle = "solid";
  const buttonBorderWidth = 1;

  // INPUT
  const inputBorderColor = theme === "light" ? Colors.gray100 : Colors.gray300;
  const inputBorderRadius = 5;
  const inputBorderWidth = 1;
  const inputBorderStyle = "solid";
  const inputTextColor = theme === "light" ? Colors.gray600 : Colors.gray050;

  // MODAL
  const modalBackgroundColor =
    theme === "light" ? Colors.white : Colors.gray500;
  const modalBorderColor = theme === "light" ? Colors.gray050 : Colors.gray100;
  const modalBorderRadius = 5;
  const modalBorderStyle = "solid";
  const modalBorderWidth = 1;

  // SCREENS
  const themeBackgroundColor =
    theme === "light" ? Colors.white : Colors.gray600;

  // SHADOW
  const shadowColor = Colors.black;
  const shadowOffset = {
    width: 0,
    height: 2,
  };
  const shadowOpacity = 0.25;
  const shadowRadius = 3.84;
  const shadowElevation = 5;

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

    // FORMS
    emailSentMessageContainer: {
      width: "90%",
      position: "absolute",
      top: 80,
    },
    emailSentMessage: {
      color: Colors.success,
      fontFamily: "Inter_500Medium",
      fontSize: 17,
      textAlign: "center",
    },
    errorMessageTextContainer: {
      textAlign: "left",
      width: "100%",
      paddingLeft: 20,
    },
    hidePasswordContainer: {
      position: "absolute",
      right: 15,
    },
    input: {
      width: "90%",
      height: 40,
      borderColor: inputBorderColor,
      borderWidth: inputBorderWidth,
      borderRadius: inputBorderRadius,
      padding: 10,
      marginVertical: 10,
      color: inputTextColor,
    },
    inputErrorMessageContainer: {
      alignSelf: "flex-start",
      marginBottom: -5,
      paddingLeft: 1,
    },
    inputErrorMessage: {
      color: "red",
      fontFamily: "Inter_400Regular",
      marginBottom: 10,
      alignSelf: "flex-start",
      paddingLeft: 20,
    },
    inputPasswordContainer: {
      width: "auto",
      height: 40,
      alignSelf: "center",
      flexDirection: "row",
      alignItems: "center",
      marginTop: 10,
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
