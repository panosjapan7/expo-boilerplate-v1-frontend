// ./components/inputs/InputEmailMobile.tsx
import { forwardRef } from "react";
import { Keyboard, TextInput } from "react-native";

import { Colors } from "../../styles/colors";
import { useGlobalStyles } from "../../styles/stylesheets/globalStyles";

type InputEmailMobileType = {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  returnKeyType?: "default" | "go" | "next" | "send" | "done" | undefined;
  goToRef?: React.RefObject<TextInput>;
};

const InputEmailMobile = forwardRef<TextInput, InputEmailMobileType>(
  (
    { value, setValue, placeholder, returnKeyType = "default", goToRef },
    ref
  ) => {
    const { globalStyles } = useGlobalStyles();

    return (
      <TextInput
        value={value}
        inputMode="email"
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="emailAddress"
        returnKeyType={goToRef ? "next" : returnKeyType}
        placeholder={placeholder ? placeholder : ""}
        placeholderTextColor={Colors.gray100}
        ref={ref}
        style={globalStyles.input}
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
    );
  }
);

export default InputEmailMobile;
