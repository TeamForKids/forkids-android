import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Entry from "./src/pages/Entry";
import Chat from "./src/pages/Chat";
export default function App() {
  return <Entry />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
