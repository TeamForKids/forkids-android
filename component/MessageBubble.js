import React from "react";
import { View, Text, StyleSheet } from "react-native";

import palette from "../utils/color.js";

/**
 * text : String
 * isSent : 보내는 사람 false : true
 * date : getCurrentDate
 */
const MessageBubble = ({ text, isSent, date }) => {
  const bubbleStyle = isSent ? styles.sentBubble : styles.receivedBubble;
  const textStyle = isSent ? styles.sentText : styles.receivedText;
  const timeStyle = isSent ? styles.sentTime : styles.receivedTime;
  return (
    <View>
      <View style={[styles.bubble, bubbleStyle]}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </View>
      <View style={[styles.timecontainer, timeStyle]}>
        <Text style={styles.timestamp}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bubble: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginVertical: 1,
    marginHorizontal: 8,
    maxWidth: "70%",
    //Shadow
    shadowColor: palette.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  sentBubble: {
    backgroundColor: palette.lightPrimary,
    alignSelf: "flex-end",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 15,
  },
  receivedBubble: {
    backgroundColor: palette.lightBase,
    alignSelf: "flex-start",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 5,
  },
  text: {
    fontSize: 15,
    fontFamily: "Poppins_regular",
  },
  sentText: {
    color: palette.white,
  },
  receivedText: {
    color: palette.black,
  },
  // Time Style
  timecontainer: {
    margin: 1,
  },
  sentTime: {
    alignSelf: "flex-end",
  },
  receivedTime: {
    alignSelf: "flex-start",
  },
  timestamp: {
    marginHorizontal: 12,
    fontSize: 12,
    color: palette.darkBase,
    fontFamily: "Poppins_regular",
  },
});

export default MessageBubble;
