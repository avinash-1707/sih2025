import { useIssues } from "@/lib/IssueProvider";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ProfileScreen() {
  const { currentUser } = useIssues();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>
      <View style={styles.card}>
        <Text style={styles.name}>{currentUser.name}</Text>
        <Text style={styles.info}>{currentUser.email}</Text>
        <Text style={styles.info}>{currentUser.phone}</Text>
      </View>

      <TouchableOpacity
        style={styles.editBtn}
        onPress={() => alert("Edit profile placeholder")}
      >
        <Text style={styles.editText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F6FBFF", padding: 12 },
  heading: { fontSize: 22, fontWeight: "800" },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
  },
  name: { fontWeight: "900", fontSize: 18 },
  info: { color: "#6B7280", marginTop: 4 },
  editBtn: {
    marginTop: 16,
    backgroundColor: "#1565C0",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  editText: { color: "#fff", fontWeight: "800" },
});
