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
const EventBlock = ({ key, event }) => {
  const { image, name, date, url } = event;

  const handlePress = () => {
    Linking.openURL(url);
  };

  const windowWidth = useWindowDimensions().width;
  const componentWidth = windowWidth * 0.95;
  return (
    <Pressable
      onPress={handlePress}
      style={[{ flex: 1, width: componentWidth }, styles.eventPressable]}
    >
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.date}> {date}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  eventPressable: {
    backgroundColor: palette.white,
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 3,
    overflow: "visible",
    elevation: 10,
    borderRadius: 15,
    flexDirection: "row",

    //for shadow
    shadowColor: palette.black,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  container: {
    overflow: "visible",
  },
  textContainer: {
    flexDirection: "column",
    alignContent: "flex-start",
    margin: 5,
    padding: 5,
  },
  name: {
    color: palette.black,
    fontFamily: "Poppins_bold",
    fontSize: 20,
  },
  date: {
    color: palette.black,
    fontFamily: "Poppins_regular",
    fontSize: 14,
  },
});

export default EventBlock;
