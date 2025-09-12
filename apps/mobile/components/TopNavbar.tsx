import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useIssues } from "@/lib/IssueProvider";

export default function TopNavbar() {
  const navigation = useNavigation();
  const { currentUser } = useIssues();

  return (
    <View style={styles.container} accessibilityRole="header">
      <TouchableOpacity
        accessibilityLabel="Open menu"
        style={styles.menuButton}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer() as any)}
      >
        <Text style={styles.menuIcon}>☰</Text>
      </TouchableOpacity>

      <View style={styles.titleWrap}>
        <Text style={styles.title}>Civihelp</Text>
      </View>

      <View style={styles.rightGroup}>
        <View
          style={styles.pointsBadge}
          accessibilityLabel={`Civic points ${currentUser.points}`}
        >
          <Text style={styles.pointsText}>🏅 {currentUser.points}</Text>
        </View>
        <TouchableOpacity
          style={styles.avatarButton}
          onPress={() => navigation.navigate("Profile" as never)}
          accessibilityLabel="Open profile"
        >
          <Image
            source={{
              uri: `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.name)}&background=2E7D32&color=fff`,
            }}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    backgroundColor: "transparent",
    borderBottomWidth: 0.5,
    borderBottomColor: "#E6EEF8",
  },
  menuButton: {
    padding: 8,
    marginRight: 8,
  },
  menuIcon: { fontSize: 20 },
  titleWrap: { flex: 1, alignItems: "center" },
  title: { fontSize: 18, fontWeight: "700", color: "#0F172A" },
  rightGroup: { flexDirection: "row", alignItems: "center" },
  pointsBadge: {
    backgroundColor: "#E8F5E9",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 18,
    marginRight: 8,
  },
  pointsText: { color: "#2E7D32", fontWeight: "700" },
  avatarButton: { padding: 4 },
  avatar: { width: 38, height: 38, borderRadius: 20, backgroundColor: "#ddd" },
});
