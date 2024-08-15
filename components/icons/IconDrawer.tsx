// ./components/icons/IconDrawer.tsx
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IconType } from "../../types/types";

const IconDrawer = ({ color, size, style }: IconType) => {
  return (
    <View>
      <Ionicons name="menu" color={color} size={size} style={style} />
    </View>
  );
};

export default IconDrawer;
