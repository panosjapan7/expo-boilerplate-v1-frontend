// ./components/icons/IconRegister.tsx
import { Ionicons } from "@expo/vector-icons";
import { IconType } from "../../types/types";

const IconRegister = ({ color, size, style }: IconType) => {
  return <Ionicons name="person-add" color={color} size={size} style={style} />;
};

export default IconRegister;
