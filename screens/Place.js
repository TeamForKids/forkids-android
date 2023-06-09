import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import PlaceBlock component
import PlaceBlock from "../component/PlaceBlock";

// import View components
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// import style
import palette from "../utils/color.js";

import axios from "axios";

const Place = ({ route, navigation }) => {
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
  ]);

  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://3.34.136.233:5000/region/%EC%A4%91%EA%B5%AC"
      ); // 데이터를 가져올 API 엔드포인트의 URL로 변경해야 합니다.
      setPlaces(response.data); // 받아온 데이터를 state에 저장합니다.
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //get data from /path
  useEffect(() => {
    fetchData();
  }, []);

  const handleLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    setContainerWidth(width);
    setContainerHeight(height);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text style={styles.mainText}>Place</Text>
      </View>

      <ScrollView style={styles.scrollViewStyle} onLayout={handleLayout}>
        <View
          style={[styles.placeBlockConatiner, { width: containerWidth * 0.8 }]}
        >
          {places.map((place, index) => (
            <PlaceBlock place={place} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    alignContent: "center",
  },
  placeBlockConatiner: {
    flexDirection: "column",
  },
});

export default Place;
