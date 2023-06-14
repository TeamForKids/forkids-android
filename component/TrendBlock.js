import React, {
  useEffect,
  useState,
  useLayoutEffect,
  useCallback,
} from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
//import Modal
import PlaceModal from "./PlaceModal";

//import Style
import { StyleSheet } from "react-native";
import palette from "../utils/color";

import axios from "axios";
/**
 *
 * @returns image name block
 * require image URL, name name TEXT, location name TEXT, running time NUM
 * Trend page location block
 *
 */
const TrendBlock = ({ id, place }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [info, setinfo] = useState({});
  // const getData = async () => {
  //   const requestBody = {
  //     name: place.name,
  //   };
  // axios
  //   .get("http://3.34.136.233:5000/chat/detailPlace", {
  //     requestBody,
  //   })
  //   .then((response) => {
  //     const responseData = response.data;
  //     console.log(responseData);
  //     // setPlaces(responseData.data);
  //   })
  //   .catch((error) => {
  //     // 에러 처리
  //     console.error(error);
  //   });
  //   const data = { name: "롯데월드 어드벤처\u001c" };
  //   const jsonString = JSON.stringify(data);
  //   axios({
  //     url: "http://3.34.136.233:5000/chat/detailPlace/",
  //     method: "get",
  //     params: { name: "롯데월드 어드벤처\u001c" },
  //   })
  //     .then((response) => {
  //       const responseData = response.data;
  //       console.log(responseData);
  //       // setPlaces(responseData.data);
  //     })
  //     .catch((error) => {
  //       // 에러 처리
  //       console.error(error);
  //     });
  // };
  // //get data from /path
  // useEffect(() => {
  //   getData();
  // }, []);

  const handleModalVisible = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View>
      {isModalVisible && (
        <PlaceModal info={place} onModalPress={handleModalVisible} />
      )}
      <Pressable
        onPress={handleModalVisible}
        style={styles.placeBlockButton}
        borderRadius={10}
      >
        <ImageBackground
          source={{ uri: place.image }}
          resizeMode="cover"
          borderRadius={10}
          style={styles.placeBlockImage}
        >
          {/* <View style={styles.gradient}>
            <View style={styles.black} />
            <View style={styles.transparent} />
          </View> */}
          <Text style={styles.nameBlockText}>{place.name}</Text>
        </ImageBackground>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  placeBlockButton: {
    margin: 8,
    borderRadius: 10,
    alignItems: "flex-start",
    flexWrap: "wrap",
    //Insert Shadow
    shadowColor: palette.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  placeBlockImage: {
    borderRadius: 20,
    height: 180,
    width: 180,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  nameBlockText: {
    color: palette.white,
    fontFamily: "Poppins_semibold",
    fontSize: 18,
    marginHorizontal: 10,
    marginVertical: 8,
    textShadowColor: palette.black, // 그림자 색상
    textShadowOffset: { width: 0, height: 0 }, // 그림자 위치
    textShadowRadius: 20, // 그림자 크기
  },
});

export default TrendBlock;
