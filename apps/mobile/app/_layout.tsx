import { Slot } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { StatusBar, Platform } from "react-native";
import { IssuesProvider } from "@/lib/IssueProvider";

const CivicTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#2E7D32",
    background: "#F6FBFF",
    card: "#ffffff",
    text: "#0F172A",
  },
};

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <IssuesProvider>
        <ThemeProvider value={CivicTheme}>
          <StatusBar
            barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
          />
          <Slot />
        </ThemeProvider>
      </IssuesProvider>
    </SafeAreaProvider>
  );
}
