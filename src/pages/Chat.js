import React, { useState, useCallback, useEffect } from "react";
import { ImageBackground, Text, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import Chatting from "../component/Chatting";
import { StyleSheet } from "react-native";

const Chat = () => {
  return (
    <View styles={styles.container}>
      <Chatting />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});

export default Chat;
