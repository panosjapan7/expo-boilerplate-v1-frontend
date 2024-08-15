// ./components/icons/IconLogout.tsx
import { Ionicons } from "@expo/vector-icons";
import { IconType } from "../../types/types";

const IconLogout = ({ color, size, style }: IconType) => {
  return (
    <Ionicons name="log-out-outline" color={color} size={size} style={style} />
  );
};

export default IconLogout;
