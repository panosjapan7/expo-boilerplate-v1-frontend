// ./components/buttons/ButtonTheme.tsx
import { Pressable } from "react-native";

import { useThemeContext } from "../../contexts/ThemeContext";
import { Colors } from "../../styles/colors";
import IconTheme from "../icons/IconTheme";

const ButtonTheme = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <Pressable onPress={toggleTheme}>
      <IconTheme
        size={22}
        color={theme === "light" ? Colors.black : Colors.gray100}
      />
    </Pressable>
  );
};

export default ButtonTheme;
