import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

export default function HelpScreen() {
  const faqs = [
    {
      q: "How to report a problem?",
      a: "Tap Report Problem and follow the form.",
    },
    {
      q: "How are issues prioritized?",
      a: "Based on severity, upvotes, and government triage.",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Help & Support</Text>
      {faqs.map((f, i) => (
        <View key={i} style={styles.faq}>
          <Text style={styles.q}>{f.q}</Text>
          <Text style={styles.a}>{f.a}</Text>
        </View>
      ))}

      <TouchableOpacity
        style={styles.contact}
        onPress={() => Linking.openURL("mailto:support@civihelp.example.com")}
      >
        <Text style={styles.contactText}>Contact Support (Email)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.contact}
        onPress={() => Linking.openURL("tel:+15551234567")}
      >
        <Text style={styles.contactText}>Call Helpline</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.contact}
        onPress={() => Linking.openURL("https://wa.me/15551234567")}
      >
        <Text style={styles.contactText}>Open WhatsApp Bot</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F6FBFF", padding: 12 },
  heading: { fontSize: 22, fontWeight: "800" },
  faq: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginTop: 12,
  },
  q: { fontWeight: "800" },
  a: { color: "#6B7280", marginTop: 6 },
  contact: {
    marginTop: 12,
    backgroundColor: "#2E7D32",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  contactText: { color: "#fff", fontWeight: "800" },
});
