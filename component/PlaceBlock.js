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
const PlaceBlock = ({ image, name, location, runningtime, parking, tel }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const windowWidth = useWindowDimensions().width;

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
        style={[styles.placeBlockButton, { width: windowWidth }]}
        borderRadius={10}
      >
        <View style={[styles.placecontainer, { width: windowWidth }]}>
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
    elevation: 10,
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
    fontFamily: FontFamily.poppinsBold,
  },
  location: {
    fontSize: 12,
    alignSelf: "flex-start",
    fontFamily: FontFamily.poppinsRegular,
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
    margin: 3,
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
    FontFamily: FontFamily.poppinsRegular,
    fontSize: 20,
    bottom: 10,
    left: 10,
  },
});

export default PlaceBlock;
