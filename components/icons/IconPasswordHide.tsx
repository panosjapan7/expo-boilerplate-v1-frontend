// ./components/icons/IconPasswordHide.tsx
import { Ionicons } from "@expo/vector-icons";
import { IconType } from "../../types/types";

const IconPasswordHide = ({ color, size, style }: IconType) => {
  return <Ionicons name="eye-off" color={color} size={size} style={style} />;
};

export default IconPasswordHide;
