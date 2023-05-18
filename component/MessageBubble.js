import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { FontFamily, FontSize } from "../utils/globalstyles";
import palette from "../utils/color";

const MessageBubble = ({ text, isSent }) => {
  const bubbleStyle = isSent ? styles.sentBubble : styles.receivedBubble;
  const textStyle = isSent ? styles.sentText : styles.receivedText;

  const formatTimestamp = () => {
    // 예시: timestamp를 원하는 형식으로 포맷팅하는 로직 작성
    const timestamp = new Date();
    const formattedTimestamp = timestamp.toLocaleTimeString(); // 예시: 시간만 표시
    return formattedTimestamp;
  };

  return (
    <View>
      <View style={[styles.bubble, bubbleStyle]}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </View>
      {/* <View style={styles.container}>
        <Text style={styles.timestamp}>{formatTimestamp(timestamp)}</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  bubble: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginVertical: 4,
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
    fontFamily: FontFamily.poppinsRegular,
  },
  sentText: {
    color: palette.white,
  },
  receivedText: {
    color: palette.black,
  },
  container: {
    alignSelf: "flex-end",
    marginTop: 5,
  },
  timestamp: {
    fontSize: 12,
    color: "#888",
  },
});

export default MessageBubble;
