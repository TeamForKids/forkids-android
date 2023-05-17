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
import { FontFamily, FontSize } from "../utils/globalstyles";

import { AntDesign } from "@expo/vector-icons";
/**
 *
 * @returns image place block
 * require image URL, place name TEXT, location name TEXT, running time NUM
 * Trend page location block
 *
 */
const PlaceBlock = ({ image, place, location, runningtime, parking, tel }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View>
      <Modal transparent={true} visible={isModalVisible}>
        <View style={styles.centerdView}>
          <View style={styles.modalFrame}>
            <Text style={styles.modalName}>{place}</Text>
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
        style={styles.locationBlockButton}
        borderRadius={10}
      >
        <ImageBackground
          source={image}
          resizeMode="cover"
          borderRadius={10}
          style={styles.locationBlockImage}
        >
          {/* <View style={styles.gradient}>
            <View style={styles.black} />
            <View style={styles.transparent} />
          </View> */}
          <Text style={styles.locationBlockText}>{place}</Text>
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
    padding: 10,
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
    fontFamily: "Poppins_bold",
    fontSize: 25,
  },
  modalInfo: {
    fontSize: 20,
    fontFamily: "Poppins_regular",
    alignItems: "flex-start",
    color: palette.darkBase,
  },
  modalCloseText: {
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
  locationBlockButton: {
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
  locationBlockImage: {
    borderRadius: 20,
    height: 165,
    width: 165,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  locationBlockText: {
    color: palette.white,
    fontStyle: "normal",
    fontSize: 20,
    bottom: 10,
    left: 10,
  },
});

export default PlaceBlock;
