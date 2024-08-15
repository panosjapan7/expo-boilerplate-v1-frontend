// ./app/(drawer)/_layout.tsx
import { Platform } from "react-native";

import DrawerLayoutMobile from "../../components/layouts/DrawerLayoutMobile";
import DrawerLayoutWeb from "../../components/layouts/DrawerLayoutWeb";

const Drawer = () => {
  return (
    <>{Platform.OS === "web" ? <DrawerLayoutWeb /> : <DrawerLayoutMobile />}</>
  );
};

export default Drawer;
