// ./components/layouts/TabsLayoutMobile.tsx
import { View } from "react-native";
import { Tabs } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";

import { useGlobalStyles } from "../../styles/stylesheets/globalStyles";
import ButtonTheme from "../buttons/ButtonTheme";
import IconFeed from "../icons/IconFeed";
import IconProfile from "../icons/IconProfile";

const TabsLayoutMobile = () => {
  const {
    tabBarItemInactiveColor,
    themeBackgroundColor,
    themeHeaderTextColor,
    themeTextColor,
  } = useGlobalStyles();

  return (
    <Tabs
      screenOptions={{
        headerLeft: () => (
          <DrawerToggleButton tintColor={themeHeaderTextColor} />
        ),
        headerShadowVisible: false,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: themeBackgroundColor,
        },
        headerRight: () => (
          <View style={{ marginHorizontal: 16 }}>
            <ButtonTheme color={themeHeaderTextColor} size={22} />
          </View>
        ),
        headerStyle: { backgroundColor: themeBackgroundColor },
        headerTintColor: themeHeaderTextColor,
        tabBarActiveTintColor: themeTextColor,
        tabBarInactiveTintColor: tabBarItemInactiveColor,
      }}
    >
      <Tabs.Screen
        name="feed"
        options={{
          headerTitle: "Feed",
          tabBarLabel: "Feed",
          tabBarIcon: ({ color }) => <IconFeed size={18} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "Profile",
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => <IconProfile size={18} color={color} />,
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
