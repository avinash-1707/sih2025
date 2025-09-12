import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";

export default function SettingsScreen() {
  const [dark, setDark] = useState(false);
  const [language, setLanguage] = useState("English");

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Dark Mode</Text>
        <Switch value={dark} onValueChange={setDark} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Language</Text>
        <TouchableOpacity
          onPress={() =>
            setLanguage(language === "English" ? "हिन्दी" : "English")
          }
        >
          <Text style={styles.link}>{language}</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 16 }}>
        <Text style={{ fontWeight: "700" }}>Privacy & Data</Text>
        <Text style={{ color: "#6B7280", marginTop: 8 }}>
          Manage data sharing, anonymization and permissions (placeholder).
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F6FBFF", padding: 12 },
  heading: { fontSize: 22, fontWeight: "800" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  label: { fontWeight: "700" },
  link: { color: "#1565C0", fontWeight: "700" },
});
