import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const sample = [
  {
    id: "n1",
    text: "Your report about Pothole on Maple Street is now In Progress.",
  },
  { id: "n2", text: "Garbage collection scheduled for your area tomorrow." },
  {
    id: "n3",
    text: "Street Light issue near Community Center has been resolved.",
  },
];

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Notifications</Text>
      <FlatList
        data={sample}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 120 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F6FBFF", padding: 12 },
  heading: { fontSize: 22, fontWeight: "800", marginBottom: 8 },
  item: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
  },
});
