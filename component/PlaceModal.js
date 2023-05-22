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

//import Styles
import palette from "../utils/color";
import { FontFamily, FontSize } from "../utils/globalstyles";
import { AntDesign } from "@expo/vector-icons";

/**
 *
 * @param {place including{ name, location, runningtime, parking, tel }} param0
 * @returns
 */
const PlaceModal = ({ place, onModalPress }) => {
  const { name, location, runningtime, parking, tel } = place;
  const windowWidth = useWindowDimensions().width;

  return (
    <Modal transparent={true}>
      <View style={styles.centerdView}>
        <View style={styles.modalFrame}>
          <Text style={styles.modalName}>{name}</Text>
          <Text style={styles.modalInfo}>{location}</Text>
          <Text style={styles.modalInfo}>{runningtime}</Text>
          <Text style={styles.modalInfo}>{parking}</Text>
          <Text style={styles.modalInfo}>{tel}</Text>

          <Pressable onPress={onModalPress}>
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
    color: palette.white,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});

export default PlaceModal;
