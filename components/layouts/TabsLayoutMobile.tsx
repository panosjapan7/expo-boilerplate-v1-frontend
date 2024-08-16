// ./app/(drawer)/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";

import IconFeed from "../icons/IconFeed";
import IconProfile from "../icons/IconProfile";

const TabsLayoutMobile = () => {
  return (
    <Tabs screenOptions={{ headerLeft: () => <DrawerToggleButton /> }}>
      <Tabs.Screen
        name="feed"
        options={{
          headerTitle: "Feed",
          tabBarLabel: "Feed",
          tabBarIcon: () => <IconFeed size={18} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "Profile",
          tabBarLabel: "Profile",
          tabBarIcon: () => <IconProfile size={18} />,
        }}
      />
      <Tabs.Screen
        name="hidden"
        options={{ headerTitle: "Hidden", tabBarLabel: "Hidden", href: null }}
      />
    </Tabs>
  );
};

export default TabsLayoutMobile;
