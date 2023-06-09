import React from "react";
import { useState } from "react";
import { View, TextInput, Text, FlatList, Pressable } from "react-native";

//👇🏻 app screens
import Chat from "../screens/Chat";
import Trend from "../screens/Trend";
import Place from "../screens/Place";
import Calendar from "../screens/Calendar";

//👇🏻 React Navigation configurations
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import palette from "../utils/color";
//👇🏻 Import Tabbar Icons assets
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

export default function Nav() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // screenOptions={({ route }) => ({
        //   headerShown: false,
        //   tabBarStyle: {
        //     height: 90,
        //     paddingHorizontal: 5,
        //     paddingTop: 0,
        //     backgroundColor: "rgba(34,36,40,1)",
        //     position: "absolute",
        //     borderTopWidth: 0,
        //   },
        // })}
        initialRouteName="Chat"
        activeColor={palette.lightPrimary}
        inactiveColor={palette.darkBase}
        style={{
          backgroundColor: palette.lightBase,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
          shadowColor: palette.black,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.25,
          shadowRadius: 10,
          elevation: 5,
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
