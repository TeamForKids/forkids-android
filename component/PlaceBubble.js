import React, {
  useEffect,
  useState,
  useLayoutEffect,
  useCallback,
} from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  Pressable,
  Modal,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import palette from "../utils/color.js";

import PlaceModal from "./PlaceModal";

/**
 *
 * place prop을 받아 display
 * modal로 정보를 보낸다.
 */
const PlaceBubble = ({ place }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModalVisible = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View>
      {isModalVisible && (
        <PlaceModal info={place} onModalPress={handleModalVisible} />
      )}
      <Pressable style={styles.placePressable} onPress={handleModalVisible}>
        <ImageBackground
          resizeMode="cover"
          source={place.image}
          style={styles.imageBackground}
        >
          <Text style={styles.placesText}>{place.name}</Text>
        </ImageBackground>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  placePressable: {
    marginVertical: 5,
    marginHorizontal: 5,

    backgroundColor: palette.white,
    //for borderRadious setting
    borderRadius: 10,
    overflow: "hidden",

    alignItems: "flex-start",
    flexWrap: "wrap",

    // shadow
    shadowColor: palette.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  imageBackground: {
    height: 140,
    width: 120,
    padding: 2,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  placesText: {
    color: palette.white,
    fontFamily: "Poppins_semibold",
    fontSize: 16,
    padding: 4,
    textShadowColor: palette.black, // 그림자 색상
    textShadowOffset: { width: 0, height: 0 }, // 그림자 위치
    textShadowRadius: 20, // 그림자 크기
  },
});

export default PlaceBubble;
