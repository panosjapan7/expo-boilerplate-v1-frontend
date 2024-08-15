// ./components/layouts/DrawerLayoutMobile.tsx
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={"Settings"}
        onPress={() => router.push("/(drawer)/settings")}
      />
      <DrawerItem
        label={"Log out"}
        onPress={() => {
          router.dismissAll();
          router.replace("/");
        }}
      />
    </DrawerContentScrollView>
  );
};

const DrawerLayout = () => {
  return (
    <Drawer drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="settings"
        options={{ headerTitle: "Settings", drawerLabel: "Settings" }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
