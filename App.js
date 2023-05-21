import React, { useState, useCallback, useEffect } from "react";
import { View } from "react-native";
import { useFonts } from "expo-font";

//👇🏻 Here is Bottom Tab Navigation
import Nav from "./Nav";
// import Test Screen

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  //for Hide Secreen
  const [hideSplashScreen, setHideSplashScreen] = useState(false);

  // get font assets
  const [fontsLoaded, error] = useFonts({
    Prompt_bold: require("./assets/fonts/Prompt_bold.ttf"),
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    Poppins_semibold: require("./assets/fonts/Poppins_semibold.ttf"),
    Poppins_bold: require("./assets/fonts/Poppins_bold.ttf"),
    Poppins_extrabold: require("./assets/fonts/Poppins_extrabold.ttf"),
  });

  return <Nav />;
}
