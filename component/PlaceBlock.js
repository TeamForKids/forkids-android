import React, {
  useEffect,
  useState,
  useLayoutEffect,
  useCallback,
} from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import dummyimage from "../assets/dummy_image_placeBlock.jpg";
import { StyleSheet } from "react-native";
import palette from "../utils/color";
/**
 *
 * @returns image place block
 * require image url, place name text
 */
const PlaceBlock = () => {
  return (
    <ImageBackground
      style={mystyle.block}
      source={dummyimage} //require from backend
    >
      {/* get info from backend */}
      <Text style={mystyle.text}>월드킹 순천점</Text>
    </ImageBackground>
  );
};

const mystyle = StyleSheet.create({
  block: {
    height: 150,
    fontWeight: 10,
    justifyContent: "center",
  },
  text: {
    color: palette.white,
    fontSize: 20,
    lineHeight: 26,
    display: "flex",
    alignItems: "flex-end",
  },
});

export default PlaceBlock;
