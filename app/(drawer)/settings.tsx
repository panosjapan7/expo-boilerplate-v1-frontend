// ./app/(drawer)/_layout.tsx
import { Drawer } from "expo-router/drawer";

const DrawerLayout = () => {
  return (
    <Drawer>
      <Drawer.Screen name="settings" />
    </Drawer>
  );
};

export default DrawerLayout;
