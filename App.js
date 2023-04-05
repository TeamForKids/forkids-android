import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Demo from "./component/Demo";
import Cat from "./Cat";
import Chat from "./Chat";
export default function App() {
  return (
    <Chat />
    // <View style={styles.container}>
    //   <Test />
    // </View>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
