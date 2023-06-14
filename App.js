import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, useWindowDimensions } from "react-native";

import * as Font from "expo-font";
//👇🏻 app screens
import Chat from "./screens/Chat";
import Trend from "./screens/Trend";
import Place from "./screens/Place";
import Calendar from "./screens/Calendar";
//👇🏻 React Navigation configurations
import palette from "./utils/color";
//👇🏻 Import Tabbar Icons assets
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
//👇🏻 Here is Bottom Tab Navigation
import Start from "./screens/Start";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialBottomTabNavigator();

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

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            height: 90,
            paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor: palette.white,
            position: "absolute",
            borderTopWidth: 0,
          },
        })}
        shifting={true}
        initialRouteName="Chat"
        activeColor={palette.lightPrimary}
        inactiveColor={palette.darkBase}
        barStyle={{
          backgroundColor: palette.lightBase,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        }}
      >
        <Tab.Screen
          name="Trend"
          component={Trend}
          options={{
            tabBarLabel: "Trend",
            tabBarIcon: ({ color }) => (
              <Ionicons name="md-rocket-outline" size={24} color={color} />
            ),
            tabBarColor: palette.darkBase,
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarLabel: "Chat",
            tabBarIcon: ({ color }) => (
              <Ionicons name="chatbubble-outline" size={24} color={color} />
            ),
            tabBarColor: palette.darkBase,
          }}
        />
        <Tab.Screen
          name="Place"
          component={Place}
          options={{
            tabBarLabel: "Place",
            tabBarIcon: ({ color }) => (
              <Feather name="map-pin" size={20} color={color} />
            ),
            tabBarColor: palette.darkBase,
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={Calendar}
          options={{
            tabBarLabel: "Calendar",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="calendar-blank-outline"
                size={24}
                color={color}
              />
            ),
            tabBarColor: palette.darkBase,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
