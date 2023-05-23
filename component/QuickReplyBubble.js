import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

//import styles
import { FontFamily, FontSize } from "../utils/globalstyles";
import palette from "../utils/color";

/**
 *
 * @param {} param0
 * @returns options : 옵션 리스트
 * onPress : 옵션을 눌렀을 시의 수행 작업
 */
const QuickReplyBubble = ({ id, option, onOptionPress }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Pressable
      style={styles.quickReplyButton}
      onPress={() => {
        onOptionPress(option.text);
        setIsVisible(false);
      }}
    >
      <Text style={styles.quickReplyText}>{option.text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  quickReplyButton: {
    margin: 5,
    padding: 10,

    //basic form
    backgroundColor: palette.white,
    borderRadius: 15,

    //shadow
    shadowColor: palette.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  quickReplyText: {
    fontSize: 16,
    FontFamily: "Poppins_regular",
    color: palette.black,
  },
});

export default QuickReplyBubble;
