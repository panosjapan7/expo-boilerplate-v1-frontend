// ./components/icons/IconLogin.tsx
import { Ionicons } from "@expo/vector-icons";
import { IconType } from "../../types/types";

const IconLogin = ({ color, size, style }: IconType) => {
  return <Ionicons name="log-in" color={color} size={size} style={style} />;
};

export default IconLogin;
