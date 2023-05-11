import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat, InputToolbar } from "react-native-gifted-chat";
import logoAvatar from "../src/assets/logoAvatar.png";
import ChatType from "./ChatType";
import { StyleSheet } from "react-native";

import Message from "react-native-gifted-chat";
import { Send } from "react-native-gifted-chat";

/**
 *
 * @returns Messages:
 * props user._id 로 구분 1: myself, 2: Messanger
 *
 *
 */
export function Chatting() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 2,
        text: "This is dummy Text.",
        createdAt: new Date(),

        user: {
          _id: 1,
          name: "User",
          avatar: "default",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(
      (previousMessages) => GiftedChat.append(previousMessages, messages)
      // throw messages to Backend server
    ); //Make List previousMessages and messages
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
}

const style = StyleSheet.create({});

export default Chatting;
