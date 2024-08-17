// ./components/layouts/DrawerLayoutMobile.tsx
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import IconFeed from "../icons/IconFeed";
import IconLogout from "../icons/IconLogout";
import IconSettings from "../icons/IconSettings";

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={"Feed"}
        onPress={() => router.push("/(drawer)/(tabs)/feed")}
        icon={() => <IconFeed size={18} style={{ marginLeft: 20 }} />}
        labelStyle={{ marginLeft: -15 }}
      />
      <DrawerItem
        label={"Settings"}
        onPress={() => router.push("/(drawer)/settings")}
        icon={() => <IconSettings size={18} style={{ marginLeft: 20 }} />}
        labelStyle={{ marginLeft: -15 }}
      />
      <DrawerItem
        label={"Log out"}
        onPress={() => {
          router.dismissAll();
          router.replace("/");
        }}
        icon={() => <IconLogout size={18} style={{ marginLeft: 20 }} />}
        labelStyle={{ marginLeft: -15 }}
      />
    </DrawerContentScrollView>
  );
};

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{ headerShown: false, headerShadowVisible: false }}
    >
      <Drawer.Screen
        name="settings"
        options={{
          headerTitle: "Settings",
          drawerLabel: "Settings",
          headerShown: true,
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
