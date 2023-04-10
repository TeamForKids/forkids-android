import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Entry from "./src/pages/Entry";
import Chat from "./src/pages/Chat";
import Chatting from "./src/component/Chatting";
export default function App() {
  return (
    <View style={styles.container}>
      <Chatting />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
