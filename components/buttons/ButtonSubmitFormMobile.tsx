// ./components/buttons/ButtonSubmitFormMobile.tsx
import React from "react";
import { Pressable, Text } from "react-native";
import { useGlobalStyles } from "../../styles/stylesheets/globalStyles";

type ButtonSubmitFormProps = {
  onPress: () => void;
  isDisabled?: boolean;
  buttonText: string;
};

const ButtonSubmitFormMobile: React.FC<ButtonSubmitFormProps> = ({
  onPress,
  buttonText,
  isDisabled,
}) => {
  const { globalStyles } = useGlobalStyles();

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={[globalStyles.button, { opacity: isDisabled ? 0.3 : 1 }]}
    >
      <Text style={globalStyles.buttonTextMedium}>{buttonText}</Text>
    </Pressable>
  );
};

export default ButtonSubmitFormMobile;
