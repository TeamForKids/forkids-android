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
import { FontFamily } from "../utils/globalstyles";
// import component
import RecommendBubble from "../component/RecommendBubble";

const RecommendContainer = ({ recommends, onRecommendPress }) => {
  return (
    <View style={styles.container}>
      {recommends.map((recommend) => (
        <RecommendBubble
          text={recommend.text}
          onRecommendPress={onRecommendPress}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    backgroundColor: palette.white,
    paddingTop: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default RecommendContainer;
