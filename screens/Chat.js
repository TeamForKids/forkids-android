import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat, InputToolbar } from "react-native-gifted-chat";

import { SafeAreaView } from "react-native-safe-area-context";

import { StyleSheet } from "react-native";
import { FontFamily } from "../GlobalStyles";
import palette from "../utils/color";

const Chat = ({ route, navigation }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <SafeAreaView style={styles.viewchat}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderInputToolbar={this.renderInputToolbar}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewchat: {
    flex: 1,
  },
  inputToolbar: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: palette.darkBase,
    borderRadius: 25,
  },
});

export default Chat;
