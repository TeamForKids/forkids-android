import React, { useState, useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
//👇🏻 Here is Bottom Tab Navigation
import Nav from "./Nav";
import Chatting from "./component/Chatting";
import Entry from "./component/Entry";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Guide3 from "./component/Guide3";

const Stack = createNativeStackNavigator();

export default function App() {
  //for Hide Secreen
  const [hideSplashScreen, setHideSplashScreen] = useState(false);
  const [fontsLoaded, error] = useFonts({
    Prompt_bold: require("./assets/fonts/Prompt_bold.ttf"),
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    Poppins_semibold: require("./assets/fonts/Poppins_semibold.ttf"),
    Poppins_bold: require("./assets/fonts/Poppins_bold.ttf"),
    Poppins_extrabold: require("./assets/fonts/Poppins_extrabold.ttf"),
  });

  useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 8000);
  }, []);

  return (
    // <>
    //   <NavigationContainer>
    //     {hideSplashScreen ? (
    //       <Stack.Navigator>
    //         <Nav />
    //       </Stack.Navigator>
    //     ) : (
    //       <Entry />
    //     )}
    //   </NavigationContainer>
    // </>
    <>
      {/* <Entry /> */}
      <Nav />
    </>
    // <Guide3 />
  );
}
