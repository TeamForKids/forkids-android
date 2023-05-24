import React, { useState, Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";

// import Style
import palette from "../utils/color";
import { FontFamily, FontSize } from "../utils/globalstyles";

const RecommendBubble = ({ key, text, onRecommendPress }) => {
  return (
    <Pressable
      style={styles.boxcontainer}
      onPress={() => {
        onRecommendPress(text);
      }}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  boxcontainer: {
    borderRadius: 20,
    borderColor: palette.lightPrimary,
    color: palette.white,
    borderWidth: 2,

    paddingHorizontal: 10,
    paddingVertical: 3,
    marginVertical: 2,
    marginHorizontal: 4,
    flexWrap: "wrap",
  },
  text: {
    fontFamily: "Poppins_semibold",
    fontSize: 14,
    color: palette.lightPrimary,
  },
});

export default RecommendBubble;
