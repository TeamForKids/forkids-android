import React, { useLayoutEffect, useState } from "react";
import {
  View,
  TextInput,
  Text,
  FlatList,
  Pressable,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MessageComponent from "../component/MessageComponent";
import { styles } from "../utils/styles";
import socket from "../utils/socket";

//Here is location lib
import * as Location from "expo-location";

const Place = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(true);

  const getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();

      const {
        coords: { latitude, longtitude },
      } = await Location.getCurrentPositionAsync();

      setIsLoading(false);
    } catch (e) {
      Alert.alert("위치정보를 가져올 수 없습니다.");
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text> This is Place page</Text>
    </View>
  );
};

export default Place;
