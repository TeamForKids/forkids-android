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
import palette from "../utils/color";
import { FontFamily } from "../utils/globalstyles";

import PlaceModal from "./PlaceModal";

/**
 *
 * place prop을 받아 display
 * modal로 정보를 보낸다.
 */
const PlaceBubble = ({ place, index }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { image, name, location, runningtime, parking, tel } = place;

  const handleModalVisible = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View>
      {isModalVisible && (
        <PlaceModal place={place} onModalPress={handleModalVisible} />
      )}
      <Pressable
        id={index}
        style={styles.placePressable}
        onPress={handleModalVisible}
      >
        <ImageBackground
          resizeMode="cover"
          source={require("../assets/dummy_image_place.png")}
          // style={styles.imageBackground}
        >
          <Text style={styles.places}>{name}</Text>
        </ImageBackground>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  placePressable: {
    margin: 8,
    borderRadius: 10,
    alignItems: "flex-start",

    backgroundColor: palette.white,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 5,

    padding: 3,

    height: 100,
    width: 100,
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
    borderRadius: 20,
    height: 180,
    width: 180,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  places: {
    color: palette.black,
    fontFamily: "Poppins_regular",
    fontSize: 20,
    bottom: 10,
    left: 10,
  },
});

export default PlaceBubble;
