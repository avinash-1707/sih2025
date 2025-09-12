import { Tabs } from "expo-router";
import TopNavbar from "../../../components/TopNavbar";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        //@ts-ignore
        header: ({ navigation }) => <TopNavbar navigation={navigation} />,
        tabBarShowLabel: true,
      }}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="explore" options={{ title: "Explore" }} />
      <Tabs.Screen name="my-issues" options={{ title: "My Issues" }} />
      <Tabs.Screen name="notifications" options={{ title: "Notifications" }} />
      <Tabs.Screen name="rewards" options={{ title: "Rewards" }} />
    </Tabs>
  );
}
