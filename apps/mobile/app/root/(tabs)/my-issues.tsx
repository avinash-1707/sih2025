import IssueCard from "@/components/IssueCard";
import { useIssues } from "@/lib/IssueProvider";
import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function MyIssuesScreen() {
  const { issues, currentUser } = useIssues();
  const [filter, setFilter] = useState<
    "All" | "Pending" | "In Progress" | "Resolved"
  >("All");

  const mine = useMemo(
    () => issues.filter((i) => i.userId === currentUser.id),
    [issues]
  );
  const filtered = useMemo(
    () => (filter === "All" ? mine : mine.filter((m) => m.status === filter)),
    [mine, filter]
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerWrap}>
        <Text style={styles.heading}>My Issues</Text>
        <Text style={styles.sub}>Track your reports and statuses</Text>
      </View>

      <View style={styles.filters}>
        {(["All", "Pending", "In Progress", "Resolved"] as const).map((f) => (
          <TouchableOpacity
            key={f}
            onPress={() => setFilter(f)}
            style={[styles.filterBtn, filter === f && styles.filterActive]}
          >
            <Text
              style={[
                styles.filterText,
                filter === f && styles.filterTextActive,
              ]}
            >
              {f}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => <IssueCard issue={item} />}
        contentContainerStyle={{ paddingBottom: 120 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F6FBFF" },
  headerWrap: { paddingHorizontal: 16, paddingTop: 12 },
  heading: { fontSize: 24, fontWeight: "800" },
  sub: { color: "#6B7280" },
  filters: { flexDirection: "row", padding: 12, flexWrap: "wrap" },
  filterBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#fff",
    marginRight: 8,
    borderRadius: 999,
  },
  filterActive: { backgroundColor: "#2E7D32" },
  filterText: { color: "#374151" },
  filterTextActive: { color: "#fff", fontWeight: "700" },
});
