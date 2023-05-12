import React, { useLayoutEffect, useState } from "react";
import {
  ScrollView,
  SafeAreaView,
  StatusBar,
  View,
  TextInput,
  Text,
  FlatList,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MessageComponent from "../component/MessageComponent";
import { styles } from "../utils/styles";
import socket from "../utils/socket";

// import PlaceBlock component
import PlaceBlock from "../component/PlaceBlock";

const Trend = ({ route, navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <PlaceBlock />
      </ScrollView>
    </SafeAreaView>
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <Text> This is Trend page</Text>
    // </View>
  );
};

export default Trend;
