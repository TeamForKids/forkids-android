import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";

// import style
import palette from "../utils/color";
import { FontFamily, FontSize } from "../utils/globalstyles";

// import Chat component
import MessageBubble from "../component/MessageBubble";
import QuickReplyBubble from "../component/QuickReplyBubble";
import PlaceBubble from "../component/PlaceBubble";

// import Mongoose for connecting
import mongoose, { mongo } from "mongoose";
import axios from "axios";

const Chat = () => {
  //First dummy Text
  const [messages, setMessages] = useState([
    {
      user: 1,
      text: "Base text",
      isSent: false,
      date: "", // getCurrentTime 이 형식 미지정으로 렌더링이 불가능함
    },
  ]); // which contain messages array
  const [inputText, setInputText] = useState(""); // which contain user's text input

  const sendMessage = () => {
    if (inputText.trim() === "") return;

    // New Message Text form
    const newMessage = {
      // id: messages.length + 1,
      user: 1,
      text: inputText,
      isSent: true,
      date: getCurrentTime(),
    };

    setMessages([...messages, newMessage]);
    setInputText("");
  };

  // useEffect(() => {
  //   // fetch message from back-end
  //   const fetchMessages = async () => {
  //     try {
  //       // const response = await axios.get("/api/messages"); // example api, get from
  //       const newMessage = {
  //         id: messages.length + 1,
  //         isSent: false,
  //         text: response.data,
  //       };
  //       setMessages([...messages, newMessage]);
  //     } catch (error) {
  //       console.error("Error fetching messages:", error);
  //     }
  //   };

  //   fetchMessages();
  // }, []);

  /**
   *
   * @returns 메시지 버블을 보여준다.
   * text: 메시지 텍스트
   * isSent : 메시지의 수신자 지정 (false : true)
   */
  const renderMessage = () => {
    return messages.map((message) => (
      <MessageBubble
        // id={message.id}
        text={message.text}
        isSent={message.isSent}
        date={message.date}
      />
    ));
  };

  const [isVisible, setIsVisible] = useState(true);

  /**
   * quickReplybubble option을 클릭했을 시의 수행
   * 1. setMessage에 option텍스트를 추가
   * 2. setIsVisible(false) 처리하여 bubble을 화면 상에서 지움
   *  */
  const handleQuickReplyPress = (option) => {
    setMessages([
      ...messages,
      { text: option, isSent: true, date: getCurrentTime() },
    ]);
    setIsVisible(false);
  };

  /**
   *
   * @returns 현재 시간을 얻는다.
   */
  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text style={styles.mainText}>Chat</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {renderMessage()}
        {isVisible && (
          <QuickReplyBubble
            options={["5-7세 어린이", "8-13세 초등학생"]}
            onOptionPress={handleQuickReplyPress}
          />
        )}
        {isVisible && (
          <QuickReplyBubble
            options={["hi", "hello", "annyeong"]}
            onOptionPress={handleQuickReplyPress}
          />
        )}
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 8,
          backgroundColor: palette.white,
          padding: 10,
        }}
      >
        {/* Bottom TextInput & SendButton */}
        <TextInput
          style={styles.textInput}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Enter Text"
        />

        <Pressable
          onPress={sendMessage}
          style={{
            padding: 10,
            backgroundColor: palette.lightPrimary,
            borderRadius: 10,
          }}
        >
          <Image
            source={require("../assets/Send.png")}
            style={{
              width: 20,
              height: 20,
            }}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainText: {
    color: palette.lightPrimary,
    fontFamily: FontFamily.poppinsBold,
    fontSize: 30,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: palette.lightBase,
  },
  scrollView: {
    overflow: "visible",
    flexGrow: 1,
    paddingHorizontal: 10,
    elevation: 10,
    paddingVertical: 8,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: palette.lightBase,
    marginRight: 8,
    padding: 8,
    borderRadius: 10,
    backgroundColor: palette.lightBase,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: 14,
  },
});

export default Chat;
