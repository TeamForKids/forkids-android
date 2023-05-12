import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";

import { StyleSheet } from "react-native";

export function ChatType() {
  const [messages, setMessages] = useState([]);
  const questionType = 2;
  useEffect(() => {
    if (questionType == 1) {
      setMessages([
        {
          _id: 1,
          text: "포키즈 챗봇에서 무엇이든 물어보세요.",
          createdAt: new Date(),

          user: {
            _id: 2,
            name: "Forkids",
            avatar: logoAvatar,
          },
        },
      ]);
    } else if (questionType == 2) {
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
    }
  });
}

export default ChatType;
