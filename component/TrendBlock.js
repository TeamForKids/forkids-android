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
import { AntDesign } from "@expo/vector-icons";
import { FontFamily } from "../utils/globalstyles";

/**
 *
 * @returns image name block
 * require image URL, name name TEXT, location name TEXT, running time NUM
 * Trend page location block
 *
 */
const TrendBlock = ({ image, name, location, runningtime, parking, tel }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View>
      <Modal transparent={true} visible={isModalVisible}>
        <View style={styles.centerdView}>
          <View style={styles.modalFrame}>
            <Text style={styles.modalName}>{name}</Text>
            <Text style={styles.modalInfo}>{location}</Text>
            <Text style={styles.modalInfo}>{runningtime}</Text>
            <Text style={styles.modalInfo}>{parking}</Text>
            <Text style={styles.modalInfo}>{tel}</Text>

            <Pressable onPress={() => setIsModalVisible(!isModalVisible)}>
              <Text>
                <AntDesign
                  name="close"
                  size={24}
                  color={palette.black}
                  style={{ paddingHorizontal: 10 }}
                />{" "}
              </Text>
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
          <Text style={styles.nameBlockText}>{name}</Text>
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
    width: "100%",
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
    fontFamily: FontFamily.poppinsBold,
    fontSize: 25,
  },
  modalInfo: {
    fontSize: 20,
    fontFamily: FontFamily.poppinsRegular,
    alignItems: "flex-start",
    color: palette.darkBase,
  },
  modalCloseText: {
    margin: 3,
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
    height: 180,
    width: 180,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  nameBlockText: {
    color: palette.white,
    fontStyle: "normal",
    fontSize: 20,
    bottom: 10,
    left: 10,
  },
});

export default TrendBlock;
