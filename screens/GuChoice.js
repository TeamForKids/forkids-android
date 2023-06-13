import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Pressable } from "react-native";
import { ScrollView } from "react-native";
import palette from "../utils/color";
const GuChoice = ({ handleGuPress }) => {
  const [gudata, setGudata] = useState([
    "강남구",
    "강동구",
    "강북구",
    "강서구",
    "관악구",
    "광진구",
    "구로구",
    "금천구",
    "노원구",
    "도봉구",
    "동대문구",
    "동작구",
    "마포구",
    "서대문구",
    "서초구",
    "성동구",
    "성북구",
    "송파구",
    "양천구",
    "영등포구",
    "용산구",
    "은평구",
    "종로구",
    "중구",
    "중랑구",
  ]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        padding: 10,
      }}
      contentContainerStyle={styles.centerdView}
    >
      <ScrollView
        style={styles.placeScroll}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {gudata.map((data) => (
          <Pressable
            onPress={() => handleGuPress(data)}
            style={styles.placeButton}
          >
            <Text style={styles.placeText}>{data}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  centerdView: { flex: 1 },
  placeBlockConatiner: {},
  placeScroll: {
    flex: 1,
  },
  placeButton: {
    margin: 8,
    borderRadius: 30,
  },
  placeText: {
    fontFamily: "Poppins_regular",
    fontSize: 20,
    alignSelf: "center",
  },
});

export default GuChoice;
