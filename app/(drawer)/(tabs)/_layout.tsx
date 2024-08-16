// ./app/(drawer)/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ headerLeft: () => <DrawerToggleButton /> }}>
      <Tabs.Screen
        name="feed"
        options={{ headerTitle: "Feed", tabBarLabel: "Feed" }}
      />
      <Tabs.Screen
        name="profile"
        options={{ headerTitle: "Profile", tabBarLabel: "Profile" }}
      />
      <Tabs.Screen
        name="hidden"
        options={{ headerTitle: "Hidden", tabBarLabel: "Hidden", href: null }}
      />
    </Tabs>
  );
};

export default TabsLayout;
