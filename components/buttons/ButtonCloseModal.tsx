// ./components/buttons/ButtonCloseModal.tsx
import { Keyboard, Pressable } from "react-native";
import { router } from "expo-router";

import { ButtonType } from "../../types/types";
import IconClose from "../icons/IconClose";

const ButtonCloseModal = ({ color, size, style }: ButtonType) => {
  return (
    <Pressable
      onPress={() => {
        Keyboard.dismiss;
        router.back();
      }}
    >
      <IconClose color={color} size={size} style={style} />
    </Pressable>
  );
};

export default ButtonCloseModal;
