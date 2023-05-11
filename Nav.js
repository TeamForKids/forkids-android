import React from "react";
import { useState } from "react";
import { View, TextInput, Text, FlatList, Pressable } from "react-native";

import { AntDesign } from "@expo/vector-icons";
//👇🏻 app screens

import Messaging from "./screens/Messaging";
import Trend from "./screens/Trend";
import Place from "./screens/Place";
import Calendar from "./screens/Calendar";

import Chatting from "./component/Chatting";

//👇🏻 React Navigation configurations
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import palette from "./utils/color";

//👇🏻 Import Tabbar Icons assets
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

export default function Nav() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Messaging"
        activeColor={palette.lightPrimary}
        inactiveColor={palette.darkBase}
        barStyle={{ backgroundColor: palette.lightBase }}
      >
        <Tab.Screen
          name="Trend"
          component={Trend}
          options={{
            tabBarLabel: "Trend",
            tabBarIcon: ({ color }) => (
              <Ionicons name="rocket" size={24} color={color} />
              //   <FontAwesomeIcon icon="rocket-launch" color={color} size={20} />
            ),
            tabBarColor: palette.darkBase,
          }}
        />
        <Tab.Screen
          name="Messaging"
          component={Chatting}
          options={{
            tabBarLabel: "Chat",
            tabBarIcon: ({ color }) => (
              <Ionicons name="chatbubble" size={24} color={color} />
              //   <FontAwesomeIcon icon="message-bot" size={20} color={color} />
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
              <MaterialIcons name="place" size={24} color={color} />
              //   <FontAwesomeIcon icon="map" size={20} color={color} />
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
              //   <FontAwesomeIcon icon="calendar" size={20} color={color} />
            ),
            tabBarColor: palette.darkBase,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
