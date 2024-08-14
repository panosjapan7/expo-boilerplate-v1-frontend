// ./components/buttons/ButtonCloseModal.tsx
import { Keyboard, Pressable } from "react-native";
import { router } from "expo-router";

import IconClose from "../icons/IconClose";
import { ButtonCloseModalType } from "../../types/types";

const ButtonCloseModal = ({ color, size, style }: ButtonCloseModalType) => {
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
