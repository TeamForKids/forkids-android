import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, useWindowDimensions } from "react-native";

import * as Font from "expo-font";

//👇🏻 Here is Bottom Tab Navigation
import Nav from "./BottomTab/Nav";
import Start from "./screens/Start";

export default function App() {
  //for Hide Secreen

  const [fontsLoaded, setFontsLoaded] = useState(false);
  const loadFonts = async () => {
    await Font.loadAsync({
      Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
      Poppins_bold: require("./assets/fonts/Poppins_bold.ttf"),
      Poppins_semibold: require("./assets/fonts/Poppins_semibold.ttf"),
      Poppins_extrabold: require("./assets/fonts/Poppins_extrabold.ttf"),
      Prompt_bold: require("./assets/fonts/Prompt_bold.ttf"),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Text>Waiting...</Text>
      </SafeAreaView>
    );
  }

  return <Nav />;
}
