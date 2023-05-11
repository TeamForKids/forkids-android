import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import logoAvatar from "../assets/logoAvatar.png";
import ChatType from "./ChatType";
import { StyleSheet } from "react-native";

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
        _id: 1,
        text: "아이의 연령대를 선택해주세요.",
        createdAt: new Date(),
        quickReplies: {
          type: "radio",
          keepIt: true,
          values: [
            {
              title: "3-5세 영유아",
              value: "kids",
            },
            {
              title: "6-13세 어린이",
              value: "elems",
            },
          ],
        },
        user: {
          _id: 2,
          name: "Forkids",
          avatar: logoAvatar,
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

/**
 *
 */
const style = StyleSheet.create({});

export default Chatting;
