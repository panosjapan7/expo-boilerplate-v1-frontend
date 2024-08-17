// ./components/buttons/ButtonTheme.tsx
import { Pressable } from "react-native";

import { ButtonType } from "../../types/types";
import { useThemeContext } from "../../contexts/ThemeContext";
import { Colors } from "../../styles/colors";
import IconTheme from "../icons/IconTheme";

const ButtonTheme = ({ color, size, style }: ButtonType) => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <Pressable onPress={toggleTheme}>
      <IconTheme size={size} color={color} style={style} />
    </Pressable>
  );
};

export default ButtonTheme;
