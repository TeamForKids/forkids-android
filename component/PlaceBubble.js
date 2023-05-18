import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import palette from "../utils/color";

const PlaceBubble = ({ placeName, imageUrl }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: imageUrl }}
        style={styles.imageBackground}
      >
        <Text style={styles.placeName}>{placeName}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    overflow: "hidden",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  placeName: {
    fontSize: 18,
    fontWeight: "bold",
    color: palette.white,
    backgroundColor: palette.white,
    padding: 10,
  },
});

export default PlaceBubble;
