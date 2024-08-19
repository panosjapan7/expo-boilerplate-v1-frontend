// ./components/icons/IconCheckMark.tsx
import { Ionicons } from "@expo/vector-icons";

import { IconType } from "../../types/types";

const IconCheckMark = ({ color, size, style }: IconType) => {
  return (
    <Ionicons name="checkmark-circle" color={color} size={size} style={style} />
  );
};

export default IconCheckMark;
