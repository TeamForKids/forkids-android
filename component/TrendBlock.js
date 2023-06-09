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

/**
 *
 * @returns image name block
 * require image URL, name name TEXT, location name TEXT, running time NUM
 * Trend page location block
 *
 */
const TrendBlock = ({ id, place }) => {
  const { image, name, location, runningtime, parking, tel } = place;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalVisible = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View>
      {isModalVisible && (
        <PlaceModal place={place} onModalPress={handleModalVisible} />
      )}
      <Pressable
        onPress={handleModalVisible}
        style={styles.placeBlockButton}
        borderRadius={10}
      >
        <ImageBackground
          source={image}
          resizeMode="cover"
          borderRadius={10}
          style={styles.placeBlockImage}
        >
          {/* <View style={styles.gradient}>
            <View style={styles.black} />
            <View style={styles.transparent} />
          </View> */}
          <Text style={styles.nameBlockText}>{place}</Text>
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
    fontSize: 20,
    bottom: 10,
    left: 10,
  },
});

export default TrendBlock;
