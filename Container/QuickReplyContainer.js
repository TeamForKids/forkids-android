import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

//import styles
import palette from "../utils/color";

//import component
import QuickReplyBubble from "../component/QuickReplyBubble";

/**
 *
 * @param {} param0
 * @returns options : 옵션 리스트
 * onOptionPress : 옵션을 눌렀을 시의 수행 작업 = handleQuickReplyPress
 */
const QuickReplyContainer = ({ key, options, onOptionPress }) => {
  return (
    <View style={styles.quickreplycontainer}>
      {options.map((option, index) => (
        <QuickReplyBubble
          key={key}
          option={option}
          // style={styles.quickReplyButton}
          onOptionPress={onOptionPress}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  quickreplycontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },
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

export default QuickReplyContainer;
