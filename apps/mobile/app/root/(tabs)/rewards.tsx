import { useIssues } from "@/lib/IssueProvider";
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
const badges = [
  { id: "b1", name: "First Report" },
  { id: "b2", name: "Active Citizen" },
];

const leaderboard = [
  { id: "u1", name: "Aisha Khan", points: 125 },
  { id: "u2", name: "Ravi Kumar", points: 210 },
  { id: "u3", name: "Sita Mehra", points: 95 },
];

export default function RewardsScreen() {
  const { currentUser } = useIssues();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Rewards & Civic Points</Text>
      <View style={styles.pointsCard}>
        <Text style={styles.pointsText}>🏅 {currentUser.points ?? 0}</Text>
        <Text style={{ color: "#6B7280" }}>Civic Points</Text>
      </View>

      <Text style={styles.sectionTitle}>Badges</Text>
      <FlatList
        data={badges}
        keyExtractor={(b) => b.id}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.badge}>
            <Text>{item.name}</Text>
          </View>
        )}
      />

      <Text style={styles.sectionTitle}>Leaderboard</Text>
      <FlatList
        data={leaderboard}
        keyExtractor={(i) => i.id}
        renderItem={({ item, index }) => (
          <View style={styles.row}>
            <Text>
              {index + 1}. {item.name}
            </Text>
            <Text>{item.points}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F6FBFF", padding: 12 },
  heading: { fontSize: 22, fontWeight: "800" },
  pointsCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
    alignItems: "center",
  },
  pointsText: { fontSize: 28, fontWeight: "900", color: "#2E7D32" },
  sectionTitle: { marginTop: 16, fontWeight: "800" },
  badge: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginRight: 8,
    marginTop: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginTop: 8,
  },
});
