// ./components/icons/IconHome.tsx
import { Ionicons } from "@expo/vector-icons";
import { IconType } from "../../types/types";

const IconHome = ({ color, size, style }: IconType) => {
  return <Ionicons name="home-sharp" color={color} size={size} style={style} />;
};

export default IconHome;
