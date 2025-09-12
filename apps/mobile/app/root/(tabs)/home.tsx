import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IssueCard from "@/components/IssueCard";
import FAB from "@/components/FAB";
import { useIssues } from "@/lib/IssueProvider";

export default function HomeScreen() {
  const { issues } = useIssues();
  const navigation = useNavigation();

  const nearby = issues; // In a real app, filter by distance

  return (
    <View style={styles.container}>
      <FlatList
        data={nearby}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => <IssueCard issue={item} onPress={() => {}} />}
        contentContainerStyle={{ paddingTop: 8, paddingBottom: 120 }}
        ListHeaderComponent={() => (
          <View style={styles.headerWrap}>
            <Text style={styles.heading}>Nearby Issues</Text>
            <Text style={styles.sub}>Reported problems near your area</Text>
          </View>
        )}
      />

      <FAB onPress={() => navigation.navigate("ReportProblem" as never)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F6FBFF" },
  headerWrap: { paddingHorizontal: 16, paddingBottom: 8 },
  heading: { fontSize: 24, fontWeight: "800", color: "#0F172A" },
  sub: { color: "#6B7280" },
});
