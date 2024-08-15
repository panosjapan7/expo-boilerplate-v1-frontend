// ./components/icons/IconProfile.tsx
import { Ionicons } from "@expo/vector-icons";
import { IconType } from "../../types/types";

const IconProfile = ({ color, size, style }: IconType) => {
  return <Ionicons name="person" color={color} size={size} style={style} />;
};

export default IconProfile;
