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
  useWindowDimensions,
} from "react-native";
import { StyleSheet } from "react-native";

//import modal component
import PlaceModal from "./PlaceModal";

//import Styles
import palette from "../utils/color.js";
import axios from "axios";
/**
 *
 * @returns image name block
 * require image URL, name name TEXT, address name TEXT, running time NUM
 * Trend page address block
 * Which is used in Place Screen
 */
const PlaceBlock = ({ place, image }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const windowWidth = useWindowDimensions().width;
  const componentWidth = windowWidth * 0.95;
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
        style={[styles.placeBlockPressable, { width: componentWidth }]}
        borderRadius={10}
      >
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.image} source={{ uri: place.image }} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{place.name}</Text>
            <Text style={[styles.address, { color: palette.lightPrimary }]}>
              {place.placeType}
            </Text>
            <Text style={styles.address}>{place.address}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    // width: "20%",
    height: 80,
    width: 80,
    margin: 3,
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    margin: 6,
    padding: 3,
  },
  name: {
    fontSize: 16,
    alignSelf: "flex-start",
    fontFamily: "Poppins_bold",
  },
  address: {
    fontSize: 12,
    alignSelf: "flex-start",
    fontFamily: "Poppins_regular",
  },
  placeBlockPressable: {
    backgroundColor: palette.white,
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 3,
    overflow: "visible",
    elevation: 10,
    borderRadius: 15,
    flexDirection: "row",

    //for shadow
    shadowColor: palette.black,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  placeBlockImage: {
    margin: 3,
    borderRadius: 20,
    height: 80,
    width: 80,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
});

export default PlaceBlock;
