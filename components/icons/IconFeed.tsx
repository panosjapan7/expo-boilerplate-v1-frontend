// ./components/icons/IconFeed.tsx
import { Ionicons } from "@expo/vector-icons";
import { IconType } from "../../types/types";

const IconFeed = ({ color, size, style }: IconType) => {
  return <Ionicons name="keypad" color={color} size={size} style={style} />;
};

export default IconFeed;
