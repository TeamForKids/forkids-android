import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import PlaceBlock component
import PlaceBlock from "../component/PlaceBlock";

// import View components
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// import style
import { FontFamily, FontSize } from "../utils/globalstyles";
import palette from "../utils/color";

const Place = ({ route, navigation }) => {
  const [places, setPlaces] = useState([
    {
      image: require("../assets/dummy_image_place.png"),
      name: "점프킹 은평점",
      location: "위치 : 서울 은평구 불광로 283",
      runningtime: "운영 시간 : 오전 9시~ 오후 10시",
      parking: "주차 정보 : XXX",
      tel: "전화 번호 : 02-XXX-XXXX",
    },
    {
      image: require("../assets/dummy_image_place.png"),
      name: "점프킹 은평점",
      location: "위치 : 서울 은평구 불광로 283",
      runningtime: "운영 시간 : 오전 9시~ 오후 10시",
      parking: "주차 정보 : XXX",
      tel: "전화 번호 : 02-XXX-XXXX",
    },
    {
      image: require("../assets/dummy_image_place.png"),
      name: "점프킹 은평점",
      location: "위치 : 서울 은평구 불광로 283",
      runningtime: "운영 시간 : 오전 9시~ 오후 10시",
      parking: "주차 정보 : XXX",
      tel: "전화 번호 : 02-XXX-XXXX",
    },
    {
      image: require("../assets/dummy_image_place.png"),
      name: "점프킹 은평점",
      location: "위치 : 서울 은평구 불광로 283",
      runningtime: "운영 시간 : 오전 9시~ 오후 10시",
      parking: "주차 정보 : XXX",
      tel: "전화 번호 : 02-XXX-XXXX",
    },
    {
      image: require("../assets/dummy_image_place.png"),
      name: "점프킹 은평점",
      location: "위치 : 서울 은평구 불광로 283",
      runningtime: "운영 시간 : 오전 9시~ 오후 10시",
      parking: "주차 정보 : XXX",
      tel: "전화 번호 : 02-XXX-XXXX",
    },
    {
      image: require("../assets/dummy_image_place.png"),
      name: "점프킹 은평점",
      location: "위치 : 서울 은평구 불광로 283",
      runningtime: "운영 시간 : 오전 9시~ 오후 10시",
      parking: "주차 정보 : XXX",
      tel: "전화 번호 : 02-XXX-XXXX",
    },
    {
      image: require("../assets/dummy_image_place.png"),
      name: "점프킹 은평점",
      location: "위치 : 서울 은평구 불광로 283",
      runningtime: "운영 시간 : 오전 9시~ 오후 10시",
      parking: "주차 정보 : XXX",
      tel: "전화 번호 : 02-XXX-XXXX",
    },
    {
      image: require("../assets/dummy_image_place.png"),
      name: "점프킹 은평점",
      location: "위치 : 서울 은평구 불광로 283",
      runningtime: "운영 시간 : 오전 9시~ 오후 10시",
      parking: "주차 정보 : XXX",
      tel: "전화 번호 : 02-XXX-XXXX",
    },
    {
      image: require("../assets/dummy_image_place.png"),
      name: "점프킹 은평점",
      location: "위치 : 서울 은평구 불광로 283",
      runningtime: "운영 시간 : 오전 9시~ 오후 10시",
      parking: "주차 정보 : XXX",
      tel: "전화 번호 : 02-XXX-XXXX",
    },
  ]);

  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

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
    fontFamily: FontFamily.poppinsBold,
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
    flexDirection: "column",
  },
});

export default Place;
