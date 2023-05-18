import React, {
  useEffect,
  useState,
  useLayoutEffect,
  useCallback,
} from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  useWindowDimensions,
  Linking,
} from "react-native";
import { StyleSheet } from "react-native";
import palette from "../utils/color";
import { FontFamily, FontSize } from "../utils/globalstyles";

import { AntDesign } from "@expo/vector-icons";
/**
 *
 * @returns image event block
 * require image URL, event name TEXT, location name TEXT, running time NUM
 * Trend page location block
 *
 */
const EventBlock = ({ image, event, date, url }) => {
  const handlePress = () => {
    Linking.openURL(url);
  };

  const windowWidth = useWindowDimensions().width;

  return (
    <Pressable
      onPress={handlePress}
      style={{ flex: 1, width: windowWidth, margin: 3, paddingVertical: 5 }}
    >
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.event}>{event}</Text>
          <Text style={styles.date}> {date}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.white,
    padding: 5,
    marginBottom: 8,
    borderRadius: 15,
    flexDirection: "row",
    margin: 5,
  },
  image: {
    borderRadius: 10,
    // width: "20%",
    height: 80,
    width: 80,
    margin: 3,
  },
  textContainer: {
    flexDirection: "column",
    margin: 5,
  },
  event: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: FontFamily.poppinsBold,
  },
  date: {
    fontSize: 12,
    fontFamily: FontFamily.poppinsRegular,
  },
});

export default EventBlock;
