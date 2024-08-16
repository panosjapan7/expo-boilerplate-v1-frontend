// ./app/(drawer)/(tabs)/_layout.tsx
import { Platform } from "react-native";
import TabsLayoutMobile from "../../../components/layouts/TabsLayoutMobile";
import TabsLayoutWeb from "../../../components/layouts/TabsLayoutWeb";

const TabsLayout = () => {
  return (
    <>{Platform.OS === "web" ? <TabsLayoutWeb /> : <TabsLayoutMobile />}</>
  );
};

export default TabsLayout;
