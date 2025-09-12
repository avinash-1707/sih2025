import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { DrawerContentComponentProps } from "@react-navigation/drawer";

export default function SidebarContent(props: DrawerContentComponentProps) {
  const { navigation } = props;

  const items = [
    { key: "Home", label: "🏠 Home", screen: "Home" },
    {
      key: "ReportProblem",
      label: "➕ Report Problem",
      screen: "ReportProblem",
    },
    { key: "MyIssues", label: "📋 My Issues", screen: "MyIssues" },
    { key: "Explore", label: "🌍 Explore Dashboard", screen: "Explore" },
    {
      key: "Notifications",
      label: "🔔 Notifications",
      screen: "Notifications",
    },
    { key: "Rewards", label: "🏅 Rewards & Civic Points", screen: "Rewards" },
    { key: "Profile", label: "👤 Profile", screen: "Profile" },
    { key: "Settings", label: "⚙️ Settings", screen: "Settings" },
    { key: "Help", label: "❓ Help & Support", screen: "Help" },
    { key: "Logout", label: "🚪 Logout", screen: null },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Civihelp</Text>
        <Text style={styles.subtitle}>Empower your city</Text>
      </View>

      <View style={styles.menuList}>
        {items.map((it) => (
          <TouchableOpacity
            key={it.key}
            style={styles.menuItem}
            onPress={() => {
              if (it.screen) navigation.navigate(it.screen as never);
              else {
                // simple logout behavior
                navigation.closeDrawer();
                // In real app, handle auth logout
              }
            }}
            accessibilityRole="button"
          >
            <Text style={styles.menuText}>{it.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>v0.1 • Prototype</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    flexGrow: 1,
    justifyContent: "space-between",
  },
  header: { paddingHorizontal: 16, marginBottom: 12 },
  title: { fontSize: 22, fontWeight: "800", color: "#2E7D32" },
  subtitle: { color: "#6B7280" },
  menuList: { paddingHorizontal: 8 },
  menuItem: { paddingVertical: 14, paddingHorizontal: 12, borderRadius: 8 },
  menuText: { fontSize: 16 },
  footer: { padding: 16, borderTopWidth: 1, borderTopColor: "#EEF2FF" },
  footerText: { color: "#9CA3AF" },
});
