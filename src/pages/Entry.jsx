import React, { useState, useCallback, useEffect } from "react";
import { ImageBackground, Text, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

import { StyleSheet } from "react-native";
export function Entry() {
  return (
    <View style={styles.background}>
      <Text style={styles.text}>아이들의 더 멋진 추억을 위해</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    color: "009F15",
  },
  text: {
    position: "absolute",
    width: 247,
    height: 228,
    left: 41,
    top: 290,

    fontStyle: "normal",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    fontSize: 50,
    // color: "#FFFFFF",
  },
});

export default Entry;
