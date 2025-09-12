import IssueCard from "@/components/IssueCard";
import { useIssues } from "@/lib/IssueProvider";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function ExploreScreen() {
  const { issues } = useIssues();
  const [viewMode, setViewMode] = useState<"list" | "map">("list");

  return (
    <View style={styles.container}>
      <View style={styles.headerWrap}>
        <Text style={styles.heading}>Explore Dashboard</Text>
        <Text style={styles.sub}>Browse citywide issues</Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity
          style={[
            styles.controlBtn,
            viewMode === "list" && styles.controlActive,
          ]}
          onPress={() => setViewMode("list")}
        >
          <Text
            style={
              viewMode === "list"
                ? styles.controlTextActive
                : styles.controlText
            }
          >
            List
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.controlBtn,
            viewMode === "map" && styles.controlActive,
          ]}
          onPress={() => setViewMode("map")}
        >
          <Text
            style={
              viewMode === "map" ? styles.controlTextActive : styles.controlText
            }
          >
            Map
          </Text>
        </TouchableOpacity>
      </View>

      {viewMode === "list" ? (
        <FlatList
          data={issues}
          keyExtractor={(i) => i.id}
          renderItem={({ item }) => <IssueCard issue={item} />}
          contentContainerStyle={{ paddingBottom: 120 }}
        />
      ) : (
        <View style={styles.mapPlaceholder}>
          <Text style={{ color: "#fff", fontWeight: "700" }}>
            Map View Placeholder
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F6FBFF" },
  headerWrap: { paddingHorizontal: 16, paddingTop: 12 },
  heading: { fontSize: 24, fontWeight: "800" },
  sub: { color: "#6B7280" },
  controls: { flexDirection: "row", padding: 12 },
  controlBtn: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: "#fff",
    marginRight: 8,
    borderRadius: 8,
  },
  controlActive: { backgroundColor: "#1565C0" },
  controlText: { color: "#374151" },
  controlTextActive: { color: "#fff", fontWeight: "700" },
  mapPlaceholder: {
    height: 360,
    backgroundColor: "#1565C0",
    margin: 12,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
