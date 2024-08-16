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
        label={"Feed"}
        onPress={() => router.push("/(drawer)/(tabs)/feed")}
      />
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
    <Drawer
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{ headerShown: false }}
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
