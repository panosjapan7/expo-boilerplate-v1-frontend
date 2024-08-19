// ./components/icons/IconPasswordShow.tsx
import { Ionicons } from "@expo/vector-icons";
import { IconType } from "../../types/types";

const IconPasswordShow = ({ color, size, style }: IconType) => {
  return <Ionicons name="eye" color={color} size={size} style={style} />;
};

export default IconPasswordShow;
