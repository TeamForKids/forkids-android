import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import PlaceBlock component
import PlaceBlock from "../component/PlaceBlock";

// import View components
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// import style
import palette from "../utils/color.js";
import { Modal } from "react-native-paper";

import axios from "axios";

import { Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
// import GuChoice from "./GuChoice";
const Place = ({ route, navigation }) => {
  const [places, setPlaces] = useState([
    {
      name: "한국은행 화폐박물관",
      address: "서울 송파구 올림픽로 240",
      openingHour: "10:00 ~21:00",
      telephone: "1661-2000",
      image:
        "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%92%E1%85%AA%E1%84%91%E1%85%A8%E1%84%87%E1%85%A1%E1%86%A8%E1%84%86%E1%85%AE%E1%86%AF%E1%84%80%E1%85%AA%E1%86%AB.jpeg",
    },
    {
      name: "서소문성지역사박물관",
      address: "서울 송파구 올림픽로 240",
      openingHour: "10:00 ~21:00",
      telephone: "1661-2000",
      image:
        "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%A5%E1%84%83%E1%85%A2%E1%84%86%E1%85%AE%E1%86%AB%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%A7%E1%86%AB%E1%84%89%E1%85%A1%E1%84%87%E1%85%A1%E1%86%A8%E1%84%86%E1%85%AE%E1%86%AF%E1%84%80%E1%85%AA%E1%86%AB.png",
    },
    {
      name: "덕수궁대한제국역사관",
      address: "서울 송파구 올림픽로 240",
      openingHour: "10:00 ~21:00",
      telephone: "1661-2000",
      image:
        "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%83%E1%85%A5%E1%86%A8%E1%84%89%E1%85%AE%E1%84%80%E1%85%AE%E1%86%BC%E1%84%83%E1%85%A2%E1%84%92%E1%85%A1%E1%86%AB%E1%84%8C%E1%85%A6%E1%84%80%E1%85%AE%E1%86%A8%E1%84%8B%E1%85%A7%E1%86%A8%E1%84%89%E1%85%A1%E1%84%80%E1%85%AA%E1%86%AB.png",
    },
    {
      name: "한국금융사박물관",
      address: "서울 송파구 올림픽로 240",
      openingHour: "10:00 ~21:00",
      telephone: "1661-2000",
      image:
        "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%AE%E1%86%A8%E1%84%80%E1%85%B3%E1%86%B7%E1%84%8B%E1%85%B2%E1%86%BC%E1%84%89%E1%85%A1%E1%84%87%E1%85%A1%E1%86%A8%E1%84%86%E1%85%AE%E1%86%AF%E1%84%80%E1%85%AA%E1%86%AB.png",
    },
    {
      name: "디키디키",
      address: "서울 송파구 올림픽로 240",
      openingHour: "10:00 ~21:00",
      telephone: "1661-2000",
      image:
        "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%83%E1%85%B5%E1%84%8F%E1%85%B5%E1%84%83%E1%85%B5%E1%84%8F%E1%85%B5.jpeg",
    },
    {
      name: "키즈카페 몽슈슈",
      address: "서울 송파구 올림픽로 240",
      openingHour: "10:00 ~21:00",
      telephone: "1661-2000",
      image:
        "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8F%E1%85%B5%E1%84%8C%E1%85%B3%E1%84%8F%E1%85%A1%E1%84%91%E1%85%A6+%E1%84%86%E1%85%A9%E1%86%BC%E1%84%89%E1%85%B2%E1%84%89%E1%85%B2.png",
    },
    {
      name: "프로맘킨더 신세계백화점 본점",
      address: "서울 송파구 올림픽로 240",
      openingHour: "10:00 ~21:00",
      telephone: "1661-2000",
      image:
        "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%86%E1%85%A1%E1%86%B7%E1%84%8F%E1%85%B5%E1%86%AB%E1%84%83%E1%85%A5+%E1%84%89%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A6%E1%84%80%E1%85%A8%E1%84%87%E1%85%A2%E1%86%A8%E1%84%92%E1%85%AA%E1%84%8C%E1%85%A5%E1%86%B7+%E1%84%87%E1%85%A9%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%B7.jpeg",
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [containerWidth, setContainerWidth] = useState(0);
  const [guchoice, setguchoice] = useState("중구");
  const [modalVisible, setModalVisible] = useState(false);
  const [gudata, setGudata] = useState([
    "현재 위치",
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
  const [bucket, setBucket] = useState([
    {
      image:
        "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%A5%E1%84%83%E1%85%A2%E1%84%86%E1%85%AE%E1%86%AB%E1%84%92%E1%85%A7%E1%86%BC%E1%84%86%E1%85%AE%E1%84%89%E1%85%A9%E1%84%8B%E1%85%A7%E1%86%A8%E1%84%89%E1%85%A1%E1%84%80%E1%85%AA%E1%86%AB.png",
    },
    {
      image:
        "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%A5%E1%84%83%E1%85%A2%E1%84%86%E1%85%AE%E1%86%AB%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%A7%E1%86%AB%E1%84%89%E1%85%A1%E1%84%87%E1%85%A1%E1%86%A8%E1%84%86%E1%85%AE%E1%86%AF%E1%84%80%E1%85%AA%E1%86%AB.png",
    },
    {
      image:
        "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%A5%E1%84%83%E1%85%A2%E1%84%86%E1%85%AE%E1%86%AB%E1%84%8F%E1%85%B5%E1%84%8C%E1%85%B3%E1%84%92%E1%85%A6%E1%86%AF%E1%84%89%E1%85%B3%E1%84%8F%E1%85%A6%E1%84%8B%E1%85%A5%E1%84%89%E1%85%A6%E1%86%AB%E1%84%90%E1%85%A5+%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%85%E1%85%A1%E1%86%BC.png",
    },
    {
      image:
        "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%81%E1%85%A9%E1%86%BE%E1%84%80%E1%85%B3%E1%84%85%E1%85%B5%E1%84%82%E1%85%B3%E1%86%AB%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5+%E1%84%89%E1%85%A5%E1%84%83%E1%85%A2%E1%84%86%E1%85%AE%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%B7.png",
    },
  ]);

  const baseurl = "http://3.34.136.233:5000/";
  // const getData = async () => {
  //   axios
  //     .get(`${baseurl}region/서대문구`)
  //     .then((response) => {
  //       const responseData = response.data;
  //       setPlaces(responseData.data);
  //     })
  //     .catch((error) => {
  //       // 에러 처리
  //       console.error(error);
  //     });
  // };

  const handleLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    setContainerWidth(width);
  };

  const handleModalClose = () => {};

  const handlePress = () => {
    setModalVisible(true);
  };
  const handleGuPress = (data) => {
    setModalVisible(!modalVisible);
    setguchoice(data);
    // getData(data);
    setPlaces([
      {
        name: "서대문형무소역사관",
        placeType: "박물관",
        address: "서울 서대문구 통일로 251",
        operatingHour: "09:30 ~17:00",
        placeType: "박물관",
        telephone: "1661-2000",
        image:
          "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%92%E1%85%AA%E1%84%91%E1%85%A8%E1%84%87%E1%85%A1%E1%86%A8%E1%84%86%E1%85%AE%E1%86%AF%E1%84%80%E1%85%AA%E1%86%AB.jpeg",
      },
      {
        name: "서대문자연사박물관",
        address: "서울 서대문구 연희로32길 51",
        openingHour: "09:00 ~18:00",
        placeType: "박물관",
        telephone: "02-330-8899",
        image:
          "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%A5%E1%84%83%E1%85%A2%E1%84%86%E1%85%AE%E1%86%AB%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%A7%E1%86%AB%E1%84%89%E1%85%A1%E1%84%87%E1%85%A1%E1%86%A8%E1%84%86%E1%85%AE%E1%86%AF%E1%84%80%E1%85%AA%E1%86%AB.png",
      },
      {
        name: "서대문키즈헬스케어센터 아이랑",
        address: "서울 서대문구 백련사길 39",
        openingHour: "09:00 ~18:00",
        placeType: "키즈카페,실내놀이터",
        telephone: "0507-1322-8570",
        image:
          "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%83%E1%85%A5%E1%86%A8%E1%84%89%E1%85%AE%E1%84%80%E1%85%AE%E1%86%BC%E1%84%83%E1%85%A2%E1%84%92%E1%85%A1%E1%86%AB%E1%84%8C%E1%85%A6%E1%84%80%E1%85%AE%E1%86%A8%E1%84%8B%E1%85%A7%E1%86%A8%E1%84%89%E1%85%A1%E1%84%80%E1%85%AA%E1%86%AB.png",
      },
      {
        name: "꽃그리는아이 서대문점",
        address: "서울 서대문구 모래내로 411",
        openingHour: "0",
        placeType: "키즈카페,실내놀이터",
        telephone: "0507-1344-7964",
        image:
          "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%AE%E1%86%A8%E1%84%80%E1%85%B3%E1%86%B7%E1%84%8B%E1%85%B2%E1%86%BC%E1%84%89%E1%85%A1%E1%84%87%E1%85%A1%E1%86%A8%E1%84%86%E1%85%AE%E1%86%AF%E1%84%80%E1%85%AA%E1%86%AB.png",
      },
    ]);
  };

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: palette.lightBase,
          padding: 30,
        }}
      >
        <Text style={styles.mainText}>Place</Text>
        <View
          style={{
            marginHorizontal: 5,
            paddingHorizontal: 8,
            justifyContent: "center",

            backgroundColor: palette.lightBase,
            alignItems: "center",
            borderRadius: 30,
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
          <Pressable onPress={handlePress} style={styles.currentplace}>
            <Feather name="map-pin" size={14} color={palette.lightPrimary} />
            <Text style={styles.spotText}>{guchoice}</Text>
          </Pressable>
        </View>
      </View>

      <ScrollView style={styles.placescrollViewStyle} onLayout={handleLayout}>
        <View
          style={[styles.placeBlockConatiner, { width: containerWidth * 0.8 }]}
        >
          {places.map((place, index) => (
            <PlaceBlock key={index} place={place} />
          ))}
        </View>
      </ScrollView>

      <Modal
        visible={modalVisible}
        onRequestClose={handleModalClose}
        style={styles.modalFrame}
      >
        <View style={{ alignSelf: "center" }}>
          <ScrollView
            style={styles.scrollViewStyle}
            contentContainerStyle={{ flexGrow: 1 }}
          >
            {gudata.map((data, index) => (
              <Pressable
                key={index}
                onPress={() => handleGuPress(data)}
                style={styles.placeButton}
              >
                <Text style={styles.placeText}>{data}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
        <Pressable
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Text style={[styles.placeText, { color: palette.lightPrimary }]}>
            닫기
          </Text>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainText: {
    color: palette.lightPrimary,
    fontFamily: "Poppins_bold",
    fontSize: 30,
    paddingBottom: 0,
    alignItems: "center",
    justifyContent: "center",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: palette.lightBase,
    marginRight: 10,
  },
  currentplace: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",

    flexWrap: "wrap",
  },
  spotText: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    color: palette.lightPrimary,
    fontFamily: "Poppins_extrabold",
    fontSize: 15,
  },
  placescrollViewStyle: {
    padding: 5,
    flexGrow: 1,
    alignContent: "center",
  },
  scrollViewStyle: {
    padding: 1,
    flexGrow: 1,
    alignContent: "center",
    flexWrap: "wrap",
  },
  modalFrame: {
    height: 300,
    flexWrap: "wrap",
    backgroundColor: palette.white,
    color: palette.white,
    borderRadius: 20,
    padding: 35,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    shadowColor: palette.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  placeButton: {
    margin: 5,

    shadowColor: palette.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  placeText: {
    fontFamily: "Poppins_semibold",
    fontSize: 20,
    alignSelf: "center",
  },
});

export default Place;
