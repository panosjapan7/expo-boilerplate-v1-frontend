// ./styles/globalStyles.ts
import { Platform, StyleSheet } from "react-native";
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

    // BUTTONS
    button: {
      width: "90%",
      height: 40,
      backgroundColor: buttonBackgroundColor,
      borderRadius: buttonBorderRadius,
      marginVertical: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonTextMedium: {
      color: Colors.white,
      fontFamily: "Inter_500Medium",
    },
    buttonWithBorder: {
      color: themeHeaderTextColor,
      backgroundColor: themeBackgroundColor,
      borderColor: themeHeaderTextColor,
      borderWidth: buttonBorderWidth,
      borderStyle: buttonBorderStyle,
      paddingTop: 8,
      paddingRight: 8,
      paddingBottom: 8,
      paddingLeft: 8,
      borderRadius: borderRadius,
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

    // MODAL
    modalScreenWrapper: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      zIndex: 10,
      height: "100%",
      width: "100%",
      position: "absolute",
    },
    modalBackground: {
      backgroundColor: themeBackgroundColor,
      width: "100%",
      height: "100%",
      opacity: 0.7,
      zIndex: 10,
    },
    modalContainer: {
      position: "absolute",
      // top: "10%",
      width: "85%",
      height: "auto",
      zIndex: 20,
      opacity: 1,
      backgroundColor: modalBackgroundColor,
      borderRadius: modalBorderRadius,
      paddingVertical: 25,
      paddingLeft: 20,
      borderColor: modalBorderColor,
      borderWidth: modalBorderWidth,
      borderStyle: modalBorderStyle,

      shadowColor: shadowColor,
      shadowOffset: shadowOffset,
      shadowOpacity: shadowOpacity,
      shadowRadius: shadowRadius,
      elevation: shadowElevation,
    },
    modalCloseIconContainer: {
      position: "absolute",
      top: 10,
      right: 10,
    },
    modalContentContainer: {
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "flex-start",
    },
    modalTextContainer: {},
    modalHeader: {
      color: themeHeaderTextColor,
      fontFamily: "Inter_700Bold",
      fontSize: Platform.OS == "android" ? 18 : 16,
      marginBottom: 5,
    },
    modalParagraph: {
      color: themeHeaderTextColor,
      fontFamily: "Inter_400Regular",
      fontSize: 14,
      width: "auto",
      maxWidth: Platform.OS === "ios" ? "90%" : "95%",
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
    borderRadius,
    borderWidth,
    buttonBackgroundColor,
    buttonBorderColor,
    buttonBorderRadius,
    buttonBorderStyle,
    buttonBorderWidth,
    globalStyles,
    inputBorderColor,
    inputBorderRadius,
    inputBorderStyle,
    inputBorderWidth,
    inputTextColor,
    modalBackgroundColor,
    modalBorderColor,
    modalBorderRadius,
    modalBorderStyle,
    modalBorderWidth,
    tabBarItemInactiveColor,
    themeBackgroundColor,
    themeHeaderTextColor,
    themeTextColor,
  };
};
