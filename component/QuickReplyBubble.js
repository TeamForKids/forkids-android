import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

//import styles
import { FontFamily, FontSize } from "../utils/globalstyles";
import palette from "../utils/color";

/**
 *
 * @param {} param0
 * @returns
 */
const QuickReplyBubble = ({ options, onOptionPress }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <Pressable
          key={index}
          style={styles.button}
          onPress={() => onOptionPress(option)}
        >
          <Text style={styles.buttonText}>{option}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  button: {
    margin: 5,
    padding: 10,
    backgroundColor: palette.white,
    borderRadius: 15,
    shadowColor: palette.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    FontFamily: FontFamily.poppinsRegular,
    color: palette.black,
  },
});

export default QuickReplyBubble;
