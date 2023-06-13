import React, { useState, Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Animated,
  Pressable,
} from "react-native";

// import Style
import palette from "../utils/color";

const RecommendBubble = ({ text, onRecommendPress }) => {
  const [backgroundColor] = useState(new Animated.Value(0));
  const interpolatedColor = backgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: [palette.white, palette.lightBase],
  });

  const animatedStyle = {
    backgroundColor: interpolatedColor,
  };
  return (
    <Pressable
      // onPressIn={() => {
      //   Animated.timing(backgroundColor, {
      //     toValue: 1,
      //     duration: 200,
      //     useNativeDriver: false,
      //   }).start();
      // }}
      // onPressOut={() => {
      //   Animated.timing(backgroundColor, {
      //     toValue: 0,
      //     duration: 200,
      //     useNativeDriver: false,
      //   }).start();
      // }}
      style={[styles.boxcontainer, animatedStyle]}
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
