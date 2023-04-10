import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";

// import logoAvatar from "../assets";
// import icon from "../../assets";
export function Chat() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "포키즈의 챗봇에 오신것을 환영합니다!",
        createdAt: new Date(),

        user: {
          _id: 2,
          name: "Forkids",
          avatar: "https://placeimg.com/140/140/any",
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

export default Chat;
