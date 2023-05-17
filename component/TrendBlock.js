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
const TrendBlock = ({ image, place, location }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View>
      <Modal transparent={true} visible={isModalVisible}>
        <View style={styles.centerdView}>
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
        </View>
      </Modal>
      <Pressable
        onPress={() => setIsModalVisible(true)}
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
          <Text style={styles.placeBlockText}>{place}</Text>
        </ImageBackground>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centerdView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    padding: 20,
  },
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
  // gradient: {
  //   width: 165,
  //   height: 165,
  // },
  // black: {
  //   backgroundColor: palette.black,
  //   width: 165,
  //   height: 165,
  //   opacity: 0.2,
  // },
  // transparent: {
  //   backgroundColor: "transparent",
  //   width: 100,
  //   height: 0,
  // },
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
    height: 165,
    width: 165,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  placeBlockText: {
    color: palette.white,
    fontStyle: "normal",
    fontSize: 20,
    bottom: 10,
    left: 10,
  },
});

export default TrendBlock;
