import React from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";

//import styles
import { FontFamily, FontSize } from "../utils/globalstyles";
import palette from "../utils/color";

//import component
import PlaceBubble from "../component/PlaceBubble";
import { useState } from "react";

/**
 *
 * @returns
 */
const PlaceContainer = ({ places, onPlacePress }) => {
  return (
    <View style={styles.container}>
      {places.map((place, index) => (
        <Pressable
          style={styles.button}
          onPress={() => {
            onPlacePress(place);
          }}
        >
          <Text style={styles.text}>{place.name}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  placeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  placeBubble: {
    width: 100, // placebubble 컴포넌트의 가로 길이
    height: 100, // placebubble 컴포넌트의 세로 길이
    marginHorizontal: 10, // placebubble 컴포넌트 간의 가로 여백
    backgroundColor: palette.white,
  },
  imageBackground: {},
  placesText: {
    fontFamily: FontFamily.poppinsSemibold,
    fontSize: 14,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  button: {
    margin: 5,
    padding: 10,

    //basic form
    backgroundColor: palette.white,
    borderRadius: 15,

    //shadow
    shadowColor: palette.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  textontSize: 16,
  FontFamily: FontFamily.poppinsRegular,
  color: palette.black,
});

export default PlaceContainer;
