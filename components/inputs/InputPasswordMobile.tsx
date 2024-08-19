// ./components/inputs/InputPasswordMobile.tsx
import { forwardRef, useRef } from "react";
import { Keyboard, Pressable, TextInput, View } from "react-native";

import { useGlobalStyles } from "../../styles/stylesheets/globalStyles";
import { Colors } from "../../styles/colors";
import IconPasswordShow from "../icons/IconPasswordShow";
import IconPasswordHide from "../icons/IconPasswordHide";

type InputPasswordMobileType = {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  returnKeyType?: "default" | "go" | "next" | "send" | "done" | undefined;
  goToRef?: React.RefObject<TextInput>;
  hidePassword?: boolean;
  setHidePassword?: (hidePassword: boolean) => void;
};

const InputPasswordMobile = forwardRef<TextInput, InputPasswordMobileType>(
  (
    {
      value,
      setValue,
      placeholder,
      returnKeyType = "default",
      goToRef,
      hidePassword,
      setHidePassword,
    },
    ref
  ) => {
    const { globalStyles, themeHeaderTextColor } = useGlobalStyles();

    return (
      <View style={globalStyles.inputPasswordContainer}>
        <TextInput
          value={value}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={hidePassword ? true : false}
          ref={ref}
          returnKeyType={goToRef ? "next" : returnKeyType}
          placeholder={placeholder ? placeholder : ""}
          placeholderTextColor={Colors.gray100}
          style={globalStyles.input}
          textContentType={"oneTimeCode"}
          onChangeText={(text) => setValue(text)}
          onBlur={() => setValue(value)}
          onSubmitEditing={() => {
            if (goToRef && goToRef.current) {
              goToRef.current.focus();
            } else {
              Keyboard.dismiss(); // Dismiss the keyboard if there's no next input
            }
          }}
          blurOnSubmit={goToRef ? false : true}
        />

        {setHidePassword && (
          <Pressable
            onPress={() => setHidePassword(!hidePassword)}
            style={globalStyles.hidePasswordContainer}
          >
            {hidePassword ? (
              <IconPasswordShow size={17} color={themeHeaderTextColor} />
            ) : (
              <IconPasswordHide size={17} color={themeHeaderTextColor} />
            )}
          </Pressable>
        )}
      </View>
    );
  }
);

export default InputPasswordMobile;
