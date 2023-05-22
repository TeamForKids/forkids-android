import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

//import styles
import { FontFamily, FontSize } from "../utils/globalstyles";
import palette from "../utils/color";

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
          <PlaceBubble place={place} index={index} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
});

export default PlaceContainer;
