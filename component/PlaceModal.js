import React from "react";
import { View, Text, Pressable, Modal } from "react-native";
import { StyleSheet } from "react-native";

//import Styles
import palette from "../utils/color.js";
import { AntDesign } from "@expo/vector-icons";

/**
 *
 * @param {info including{ name, address, openingHour, parking, telephone }} param0
 * @returns
 */
const PlaceModal = ({ info, onModalPress }) => {
  const { name, address, openingHour, telephone } = info;

  return (
    <Modal transparent={true}>
      <View style={styles.centerdView}>
        <View style={styles.modalFrame}>
          <Text style={styles.modalName}>{name}</Text>
          <Text style={styles.modalInfo}>{info.address}</Text>
          <Text style={styles.modalInfo}>{info.openingHour}</Text>
          <Text style={styles.modalInfo}>{info.parking}</Text>
          <Text style={styles.modalInfo}>{info.telephone}</Text>

          <Pressable onPress={onModalPress}>
            <Text style={styles.button}>
              <AntDesign name="close" size={24} color={palette.black} />{" "}
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
    fontFamily: "Poppins_bold",
    fontSize: 30,
  },
  modalInfo: {
    fontSize: 16,
    fontFamily: "Poppins_regular",
    alignItems: "flex-start",
    color: palette.darkBase,
  },
  modalCloseText: {
    color: palette.white,
  },
  button: {
    backgroundColor: palette.white,
    paddingVertical: 10,
  },
});

export default PlaceModal;
