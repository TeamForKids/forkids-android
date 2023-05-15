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
} from "react-native";
import { StyleSheet } from "react-native";
import palette from "../utils/color";
/**
 *
 * @returns image place block
 * require image URL, place name TEXT, location name TEXT, running time NUM
 * Trend page location block
 *
 */
const PlaceBlock = ({ image, place, location }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View>
      <Modal transparent={true} visible={isModalVisible}>
        <View style={styles.modalFrame}>
          <Text style={styles.modalName}>{place}</Text>
          <Text style={styles.modalInfo}>{location}</Text>
          <Pressable
            onPress={() => setIsModalVisible(!isModalVisible)}
            style={[styles.button, styles.buttonClose]}
          >
            <Text style={styles.modalClose}>닫기</Text>
          </Pressable>
        </View>
      </Modal>
      <Pressable
        onPress={() => setIsModalVisible(true)}
        style={styles.placeBlockButton}
      >
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.placeBlockImage}
        >
          <Text style={styles.placeBlockText}>{place}</Text>
        </ImageBackground>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  modalFrame: {
    margin: 10,
    backgroundColor: palette.white,
    borderRadius: 20,
    padding: 35,
    alignItems: "flex-start",
    shadowColor: palette.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  modalName: {
    fontSize: 30,
  },
  modalInfo: {
    fontSize: 20,
  },
  modalClose: {
    color: palette.white,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
    shadowColor: palette.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    height: 165,
    width: 165,
  },
  placeBlockImage: {
    height: 165,
    width: 165,
  },
  placeBlockText: {
    fontStyle: "normal",
    fontSize: 17,
    textAlign: "left",
    verticalAlign: "bottom",
    lineHeight: 26,
  },
});

export default PlaceBlock;
