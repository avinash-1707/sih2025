import { Drawer } from "expo-router/drawer";
import SidebarContent from "../../components/SidebarContent";

export default function DrawerLayout() {
  return (
    <Drawer
      //@ts-ignore
      drawerContent={(props) => <SidebarContent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="(tabs)" options={{ title: "Main" }} />
      <Drawer.Screen name="profile" options={{ title: "Profile" }} />
      <Drawer.Screen name="settings" options={{ title: "Settings" }} />
      <Drawer.Screen name="help" options={{ title: "Help" }} />
    </Drawer>
  );
}
