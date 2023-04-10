import React, { useState, useCallback, useEffect } from "react";
import { ImageBackground, Text, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

import { StyleSheet } from "react-native";
const Entry = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>아이들의 더 멋진 추억을 위해</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundcolor: "#009F15",
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontStyle: "normal",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    fontSize: 50,
    color: "#FFFFFF",
  },
});

export default Entry;
