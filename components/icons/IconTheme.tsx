// ./components/icons/IconTheme.tsx
import { Ionicons } from "@expo/vector-icons";

import { IconType } from "../../types/types";
import { useThemeContext } from "../../contexts/ThemeContext";

const IconTheme = ({ color, size, style }: IconType) => {
  const { theme } = useThemeContext();
  return (
    <Ionicons
      name={theme === "light" ? "moon" : "sunny"}
      color={color}
      size={size}
      style={style}
    />
  );
};

export default IconTheme;
