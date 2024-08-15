// ./components/icons/IconClose.tsx
import { Ionicons } from "@expo/vector-icons";
import { IconType } from "../../types/types";

const IconClose = ({ color, size, style }: IconType) => {
  return <Ionicons name="close" color={color} size={size} style={style} />;
};

export default IconClose;
