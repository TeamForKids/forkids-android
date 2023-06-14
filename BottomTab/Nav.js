// import React, { useEffect } from "react";
// import { useState } from "react";
// import { View, TextInput, Text, FlatList, Pressable } from "react-native";

// //👇🏻 app screens
// import Chat from "../screens/Chat";
// import Trend from "../screens/Trend";
// import Place from "../screens/Place";
// import Calendar from "../screens/Calendar";
// import GuChoice from "../screens/GuChoice";
// //👇🏻 React Navigation configurations
// import palette from "../utils/color";
// //👇🏻 Import Tabbar Icons assets
// import { Ionicons } from "@expo/vector-icons";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { Feather } from "@expo/vector-icons";

// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// const Tab = createMaterialBottomTabNavigator();

// export default function Nav({ navigation, route }) {
//   const [isFirst, setFirst] = useState(false);

//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarStyle: {
//           height: 90,
//           paddingHorizontal: 5,
//           paddingTop: 0,
//           backgroundColor: palette.white,
//           position: "absolute",
//           borderTopWidth: 0,
//         },
//       })}
//       shifting={true}
//       initialRouteName="Chat"
//       activeColor={palette.lightPrimary}
//       inactiveColor={palette.darkBase}
//       barStyle={{
//         backgroundColor: palette.lightBase,
//         borderTopRightRadius: 15,
//         borderTopLeftRadius: 15,
//       }}
//     >
//       <Tab.Screen
//         name="Trend"
//         component={Trend}
//         options={{
//           tabBarLabel: "Trend",
//           tabBarIcon: ({ color }) => (
//             <Ionicons name="md-rocket-outline" size={24} color={color} />
//           ),
//           tabBarColor: palette.darkBase,
//         }}
//       />
//       <Tab.Screen
//         name="Chat"
//         component={Chat}
//         options={{
//           tabBarLabel: "Chat",
//           tabBarIcon: ({ color }) => (
//             <Ionicons name="chatbubble-outline" size={24} color={color} />
//           ),
//           tabBarColor: palette.darkBase,
//         }}
//       />
//       <Tab.Screen
//         name="Place"
//         component={Place}
//         options={{
//           tabBarLabel: "Place",
//           tabBarIcon: ({ color }) => (
//             <Feather name="map-pin" size={20} color={color} />
//           ),
//           tabBarColor: palette.darkBase,
//         }}
//       />
//       <Tab.Screen
//         name="Calendar"
//         component={Calendar}
//         options={{
//           tabBarLabel: "Calendar",
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons
//               name="calendar-blank-outline"
//               size={24}
//               color={color}
//             />
//           ),
//           tabBarColor: palette.darkBase,
//         }}
//       />
//     </Tab.Navigator>
//   );
// }
