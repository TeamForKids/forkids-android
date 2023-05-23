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
import palette from "../utils/color";
import { FontFamily, FontSize } from "../utils/globalstyles";

import { AntDesign } from "@expo/vector-icons";
/**
 *
 * @returns image name block
 * require image URL, name name TEXT, location name TEXT, running time NUM
 * Trend page location block
 * Which is used in Place Screen
 */
const PlaceBlock = ({ place }) => {
  const { image, name, location, runningtime, parking, tel } = place;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const windowWidth = useWindowDimensions().width;
  const componentWidth = windowWidth * 0.95;

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
        style={[styles.placeBlockButton, { width: componentWidth }]}
        borderRadius={10}
      >
        <View style={[styles.placecontainer, { width: componentWidth }]}>
          <Image style={styles.image} source={image} />
          <View style={styles.textContainer}>
            <Text style={styles.name}> {name}</Text>
            <Text style={styles.location}>{location}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  placecontainer: {
    backgroundColor: palette.white,
    padding: 5,
    borderRadius: 15,
    flexDirection: "row",
  },
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
    alignSelf: "flex-start",
    margin: 5,
  },
  name: {
    fontSize: 16,
    alignSelf: "flex-start",
    fontFamily: "Poppins_bold",
  },
  location: {
    fontSize: 12,
    alignSelf: "flex-start",
    fontFamily: "Poppins_regular",
  },
  buttonOpen: {
    backgroundColor: palette.lightBase,
  },
  buttonClose: {
    backgroundColor: palette.lightPrimary,
  },
  closeText: {
    color: palette.white,
  },
  placeBlockButton: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 10,
    alignItems: "flex-start",

    //Insert Shadow
    shadowColor: palette.black,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 10,
  },
  placeBlockImage: {
    margin: 3,
    borderRadius: 20,
    height: 80,
    width: 80,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  placeBlockText: {
    color: palette.white,
    FontFamily: "Poppins_regular",
    fontSize: 20,
    bottom: 10,
    left: 10,
  },
});

export default PlaceBlock;
