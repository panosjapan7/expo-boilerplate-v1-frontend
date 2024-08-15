// ./client/components/icons/IconDrawer.tsx
import { Ionicons } from "@expo/vector-icons";

import { IconType } from "../../types/types";

const IconDrawer = ({ size, color }: IconType) => {
  return <Ionicons name="menu" size={size} color={color} />;
};

export default IconDrawer;
