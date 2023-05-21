import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from "react-native";
import palette from "../utils/color";

/**
 *
 * place list를 받음
 *
 */
const PlaceBubble = ({ places }) => {
  return (
    <ScrollView horizontal={true}>
      {places.map((place, index) => (
        <View key={index} style={styles.container}>
          <ImageBackground
            source={{ uri: place.imageUrl }}
            style={styles.imageBackground}
          >
            <Text style={styles.places}>{place.name}</Text>
          </ImageBackground>
        </View>
      ))}
    </ScrollView>
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
  places: {
    fontSize: 18,
    fontWeight: "bold",
    color: palette.white,
    backgroundColor: palette.white,
    padding: 10,
  },
});

export default PlaceBubble;
