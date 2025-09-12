import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useIssues } from "@/lib/IssueProvider";

export default function ReportProblemScreen() {
  const { addIssue, getCurrentLocation } = useIssues();
  const navigation = useNavigation();

  const [imageUri, setImageUri] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("Fetching location...");

  useEffect(() => {
    (async () => {
      const loc = await getCurrentLocation();
      setLocation(loc.address);
    })();
  }, []);

  const pickImage = async () => {
    // Placeholder: In real app use Expo ImagePicker
    Alert.alert(
      "Image",
      "Image picker placeholder — integrate Expo ImagePicker in real app"
    );
  };

  const takePhoto = async () => {
    Alert.alert(
      "Camera",
      "Camera placeholder — integrate Expo Camera in real app"
    );
  };

  const submit = () => {
    if (!description.trim()) {
      Alert.alert("Validation", "Please enter a description of the problem.");
      return;
    }
    addIssue({ description, image: imageUri, location, status: "Pending" });
    Alert.alert("Submitted", "Thank you — your report has been submitted.");
    navigation.goBack();
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 16 }}
    >
      <Text style={styles.title}>Report a Problem</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Image</Text>
        <TouchableOpacity
          style={styles.imagePlaceholder}
          onPress={pickImage}
          accessibilityRole="button"
        >
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.image} />
          ) : (
            <Text style={styles.imageText}>Tap to add photo</Text>
          )}
        </TouchableOpacity>
        <View style={styles.rowButtons}>
          <TouchableOpacity
            style={[styles.smallButton, { backgroundColor: "#1565C0" }]}
            onPress={takePhoto}
          >
            <Text style={styles.smallBtnText}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.smallButton, { backgroundColor: "#2E7D32" }]}
            onPress={pickImage}
          >
            <Text style={styles.smallBtnText}>Choose from Gallery</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Describe the issue in detail"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Location</Text>
        <Text style={styles.locationText}>{location}</Text>
        <TouchableOpacity
          style={styles.changeBtn}
          onPress={() =>
            Alert.alert(
              "Edit Location",
              "In a real app you can edit or pick location."
            )
          }
        >
          <Text style={styles.changeBtnText}>Edit Location</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.submitBtn}
        onPress={submit}
        accessibilityRole="button"
      >
        <Text style={styles.submitText}>Submit Report</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#F6FBFF", flex: 1 },
  title: { fontSize: 22, fontWeight: "800", marginBottom: 16 },
  section: { marginBottom: 16 },
  label: { fontSize: 14, fontWeight: "700", marginBottom: 8 },
  imagePlaceholder: {
    height: 180,
    backgroundColor: "#fff",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E6EEF8",
  },
  imageText: { color: "#94A3B8" },
  image: { width: "100%", height: "100%", borderRadius: 12 },
  rowButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  smallButton: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 4,
    alignItems: "center",
  },
  smallBtnText: { color: "#fff", fontWeight: "700" },
  textInput: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    minHeight: 100,
    textAlignVertical: "top",
    borderWidth: 1,
    borderColor: "#E6EEF8",
  },
  locationText: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E6EEF8",
  },
  changeBtn: { marginTop: 8, alignSelf: "flex-start" },
  changeBtnText: { color: "#1565C0", fontWeight: "700" },
  submitBtn: {
    backgroundColor: "#2E7D32",
    padding: 14,
    borderRadius: 12,
    marginTop: 12,
    alignItems: "center",
  },
  submitText: { color: "#fff", fontWeight: "800" },
});
