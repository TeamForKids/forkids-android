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
  ImageBackground,
  Pressable,
  Modal,
} from "react-native";
import { StyleSheet } from "react-native";
import palette from "../utils/color";
import { FontFamily, FontSize } from "../utils/globalstyles";

import { AntDesign } from "@expo/vector-icons";
/**
 *
 * @returns image place block
 * require image URL, place name TEXT, location name TEXT, running time NUM
 * Trend page location block
 *
 */
const EventBlock = ({ image, place, location, runningtime, parking, tel }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.eventFrame}>
      <Text> This is text</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  eventFrame: {
    width: "100%",
  },
});

export default EventBlock;
