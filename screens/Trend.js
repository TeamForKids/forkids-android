import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, useWindowDimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import TrendBlock component
import TrendBlock from "../component/TrendBlock";

// import View components
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FontFamily, FontSize } from "../utils/globalstyles";
import palette from "../utils/color";

const Trend = ({ route, navigation }) => {
  const [places, setPlaces] = useState([
    {
      key: 1,
      image: require("../assets/dummy_image_place.png"),
      name: "Place Name",
      location: "위치 : 서울 은평구 불광로 283",
      runningtime: "운영 시간 : 오전 9시~ 오후 10시",
      parking: "주차 정보 : XXX",
      tel: "전화 번호 : 02-XXX-XXXX",
    },
    {
      key: 2,
      image: require("../assets/dummy_image_place.png"),
      name: "Place Name",
      location: "위치 : 서울 은평구 불광로 283",
      runningtime: "운영 시간 : 오전 9시~ 오후 10시",
      parking: "주차 정보 : XXX",
      tel: "전화 번호 : 02-XXX-XXXX",
    },
    {
      key: 3,
      image: require("../assets/dummy_image_place.png"),
      name: "Place Name",
      location: "위치 : 서울 은평구 불광로 283",
      runningtime: "운영 시간 : 오전 9시~ 오후 10시",
      parking: "주차 정보 : XXX",
      tel: "전화 번호 : 02-XXX-XXXX",
    },
    {
      key: 4,
      image: require("../assets/dummy_image_place.png"),
      name: "Place Name",
      location: "위치 : 서울 은평구 불광로 283",
      runningtime: "운영 시간 : 오전 9시~ 오후 10시",
      parking: "주차 정보 : XXX",
      tel: "전화 번호 : 02-XXX-XXXX",
    },
    {
      key: 5,
      image: require("../assets/dummy_image_place.png"),
      name: "Place Name",
      location: "위치 : 서울 은평구 불광로 283",
      runningtime: "운영 시간 : 오전 9시~ 오후 10시",
      parking: "주차 정보 : XXX",
      tel: "전화 번호 : 02-XXX-XXXX",
    },
    {
      key: 6,
      image: require("../assets/dummy_image_place.png"),
      name: "Place Name",
      location: "위치 : 서울 은평구 불광로 283",
      runningtime: "운영 시간 : 오전 9시~ 오후 10시",
      parking: "주차 정보 : XXX",
      tel: "전화 번호 : 02-XXX-XXXX",
    },
    {
      key: 7,
      image: require("../assets/dummy_image_place.png"),
      name: "Place Name",
      location: "위치 : 서울 은평구 불광로 283",
      runningtime: "운영 시간 : 오전 9시~ 오후 10시",
      parking: "주차 정보 : XXX",
      tel: "전화 번호 : 02-XXX-XXXX",
    },
    {
      key: 8,
      image: require("../assets/dummy_image_place.png"),
      name: "Place Name",
      location: "위치 : 서울 은평구 불광로 283",
      runningtime: "운영 시간 : 오전 9시~ 오후 10시",
      parking: "주차 정보 : XXX",
      tel: "전화 번호 : 02-XXX-XXXX",
    },
  ]);

  const windowWidth = useWindowDimensions().width;

  return (
    <SafeAreaView style={styles.viewContainer}>
      <View>
        <Text style={styles.mainText}>Trend</Text>
      </View>

      <ScrollView style={[styles.scrollViewStyle, { width: windowWidth }]}>
        <View style={styles.placeBlockConatiner}>
          {places.map((place, index) => (
            <TrendBlock key={index} place={place} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  mainText: {
    color: palette.lightPrimary,
    fontFamily: "Poppins_bold",
    fontSize: 30,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: palette.lightBase,
  },
  scrollViewStyle: {
    padding: 5,
    flexGrow: 1,
  },
  placeBlockConatiner: {
    //2X5 setting
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
});

export default Trend;
