import { Issue } from "@/types";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function IssueCard({
  issue,
  onPress,
}: {
  issue: Issue;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      accessibilityRole="button"
    >
      <View style={styles.left}>
        <Image
          source={
            issue.image
              ? { uri: issue.image }
              : {
                  uri: `https://api.a0.dev/assets/image?text=${encodeURIComponent(issue.title || "Issue")}&aspect=1:1`,
                }
          }
          style={styles.image}
        />
      </View>
      <View style={styles.right}>
        <View style={styles.topRow}>
          <Text style={styles.location}>📍 {issue.location}</Text>
          <View
            style={[
              styles.statusBadge,
              issue.status === "Resolved"
                ? styles.resolved
                : issue.status === "In Progress"
                  ? styles.inprogress
                  : styles.pending,
            ]}
          >
            <Text style={styles.statusText}>{issue.status}</Text>
          </View>
        </View>
        <Text style={styles.description} numberOfLines={2}>
          {issue.description}
        </Text>
        <View style={styles.metaRow}>
          <Text style={styles.date}>
            {new Date(issue.date).toLocaleDateString()}
          </Text>
          <Text style={styles.upvotes}>⬆️ {issue.upvotes ?? 0}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    marginHorizontal: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  left: { marginRight: 12 },
  image: { width: 88, height: 88, borderRadius: 8, backgroundColor: "#EEE" },
  right: { flex: 1 },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  location: { fontWeight: "700", color: "#1565C0" },
  statusBadge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 14 },
  statusText: { color: "#fff", fontWeight: "700", fontSize: 12 },
  pending: { backgroundColor: "#FFB300" },
  inprogress: { backgroundColor: "#1565C0" },
  resolved: { backgroundColor: "#2E7D32" },
  description: { marginTop: 6, color: "#334155" },
  metaRow: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  date: { color: "#94A3B8", fontSize: 12 },
  upvotes: { color: "#94A3B8", fontSize: 12 },
});
