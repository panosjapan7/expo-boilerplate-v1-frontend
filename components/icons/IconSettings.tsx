// ./components/icons/IconSettings.tsx
import { Ionicons } from "@expo/vector-icons";
import { IconType } from "../../types/types";

const IconSettings = ({ color, size, style }: IconType) => {
  return <Ionicons name="settings" color={color} size={size} style={style} />;
};

export default IconSettings;
