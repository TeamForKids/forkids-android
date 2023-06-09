import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

//import styles
import palette from "../utils/color.js";

//import component
import PlaceBubble from "../component/PlaceBubble";
import { useState } from "react";

/**
 *
 * @returns place list
 * contain placebubble
 *
 */
const PlaceContainer = ({ places }) => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[styles.contentContainer]}
      >
        {places.map((place, index) => (
          <PlaceBubble place={place} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    borderRadius: 10,
  },
});

export default PlaceContainer;
