import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import PlaceBlock component
import PlaceBlock from "../component/PlaceBlock";

// import View components
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FontFamily, FontSize } from "../utils/globalstyles";
import palette from "../utils/color";

const Place = ({ route, navigation }) => {
  const [places, setPlaces] = useState([
    {
      image: require("../assets/dummy_image_place.jpg"),
      place: "점프킹 순천점",
      location: "위치 : 서울 은평구 불광로 283",
      runningtime: "운영 시간 : 오전 9시~ 오후 10시",
      parking: "주차 정보 : XXX",
      tel: "전화 번호 : 02-XXX-XXXX",
    },
    {
      image: require("../assets/dummy_image_place.jpg"),
      place: "점프킹 순천점",
      location: "위치 : 서울 은평구 불광로 283",
      runningtime: "운영 시간 : 오전 9시~ 오후 10시",
      parking: "주차 정보 : XXX",
      tel: "전화 번호 : 02-XXX-XXXX",
    },
    {
      image: require("../assets/dummy_image_place.jpg"),
      place: "점프킹 순천점",
      location: "위치 : 서울 은평구 불광로 283",
      runningtime: "운영 시간 : 오전 9시~ 오후 10시",
      parking: "주차 정보 : XXX",
      tel: "전화 번호 : 02-XXX-XXXX",
    },
    {
      image: require("../assets/dummy_image_place.jpg"),
      place: "점프킹 순천점",
      location: "위치 : 서울 은평구 불광로 283",
      runningtime: "운영 시간 : 오전 9시~ 오후 10시",
      parking: "주차 정보 : XXX",
      tel: "전화 번호 : 02-XXX-XXXX",
    },
    {
      image: require("../assets/dummy_image_place.jpg"),
      place: "점프킹 순천점",
      location: "위치 : 서울 은평구 불광로 283",
      runningtime: "운영 시간 : 오전 9시~ 오후 10시",
      parking: "주차 정보 : XXX",
      tel: "전화 번호 : 02-XXX-XXXX",
    },
    {
      image: require("../assets/dummy_image_place.jpg"),
      place: "점프킹 순천점",
      location: "위치 : 서울 은평구 불광로 283",
      runningtime: "운영 시간 : 오전 9시~ 오후 10시",
      parking: "주차 정보 : XXX",
      tel: "전화 번호 : 02-XXX-XXXX",
    },
    {
      image: require("../assets/dummy_image_place.jpg"),
      place: "점프킹 순천점",
      location: "위치 : 서울 은평구 불광로 283",
      runningtime: "운영 시간 : 오전 9시~ 오후 10시",
      parking: "주차 정보 : XXX",
      tel: "전화 번호 : 02-XXX-XXXX",
    },
    {
      image: require("../assets/dummy_image_place.jpg"),
      place: "점프킹 순천점",
      location: "위치 : 서울 은평구 불광로 283",
      runningtime: "운영 시간 : 오전 9시~ 오후 10시",
      parking: "주차 정보 : XXX",
      tel: "전화 번호 : 02-XXX-XXXX",
    },
  ]);

  return (
    <SafeAreaView style={styles.viewContainer}>
      <View>
        <Text style={styles.mainText}>Trend</Text>
      </View>

      <ScrollView style={styles.scrollViewStyle}>
        <View style={styles.placeBlockConatiner}>
          {places.map((place, index) => (
            <PlaceBlock
              key={index}
              image={place.image}
              place={place.place}
              location={place.location}
              runningtime={place.runningtime}
              parking={place.parking}
              tel={place.tel}
            />
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

export default Place;
