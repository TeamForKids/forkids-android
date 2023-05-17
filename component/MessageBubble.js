import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { FontFamily, FontSize } from "../utils/globalstyles";
import palette from "../utils/color";

const MessageBubble = ({ text, isSent }) => {
  const bubbleStyle = isSent ? styles.sentBubble : styles.receivedBubble;
  const textStyle = isSent ? styles.sentText : styles.receivedText;

  return (
    <View style={[styles.bubble, bubbleStyle]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bubble: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 4,
    maxWidth: "70%",
  },
  sentBubble: {
    backgroundColor: "#DCF8C6",
    alignSelf: "flex-end",
  },
  receivedBubble: {
    backgroundColor: "#EAEAEA",
    alignSelf: "flex-start",
  },
  text: {
    fontSize: 16,
  },
  sentText: {
    color: "black",
  },
  receivedText: {
    color: "black",
  },
});

export default MessageBubble;
