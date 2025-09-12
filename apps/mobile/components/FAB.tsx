import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

export default function FAB({
  label = "Report Problem",
  onPress,
}: {
  label?: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      style={styles.fab}
      onPress={onPress}
      accessibilityRole="button"
    >
      <View style={styles.inner}>
        <Text style={styles.plus}>➕</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    right: 20,
    bottom: 24,
    zIndex: 40,
  },
  inner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2E7D32",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 28,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 6,
  },
  plus: { color: "#fff", fontSize: 18, marginRight: 8 },
  label: { color: "#fff", fontWeight: "700" },
});
