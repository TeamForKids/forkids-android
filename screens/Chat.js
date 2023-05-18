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

// import icon
import { Ionicons } from "@expo/vector-icons";

// import style
import palette from "../utils/color";
import { FontFamily, FontSize } from "../utils/globalstyles";

// import Chat component
import MessageBubble from "../component/MessageBubble";
import QuickReplyBubble from "../component/QuickReplyBubble";

// import Mongoose for connecting
import mongoose, { mongo } from "mongoose";
import axios from "axios";

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, isSent: false, text: "example Text" },
  ]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    // fetch message from back-end
    const fetchMessages = async () => {
      try {
        // const response = await axios.get("/api/messages"); // example api, get from
        const newMessage = {
          id: messages.length + 1,
          isSent: false,
          text: response.data,
        };
        setMessages([...messages, newMessage]);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  const sendMessage = async () => {
    if (inputText.trim() === "") return; //get text input

    const newMessage = {
      id: messages.length + 1,
      isSent: true,
      text: inputText, // make newMessage
    };

    setMessages([...messages, newMessage]); //setting
    // // 수정 필요, 매번 새 배열을 세팅하는 것이 아닌
    // // 기존 메시지는 두고 newMessage만을 append하도록 설정
    // setInputText("");

    // try {
    //   // warn : do not use until api is set
    //   await axios.post("host api", { newMessage });
    //   console.log("Message sent:", newMessage);
    //   setInputValue("");
    // } catch (error) {
    //   console.error("Error sending message:", error);
    // }
  };

  const renderMessage = () => {
    return messages.map((message) => (
      <MessageBubble
        key={message.id}
        text={message.text}
        isSent={message.isSent}
      />
    ));
  };

  const [isVisible, setIsVisible] = useState(true);

  const handleQuickReplyPress = (option) => {
    setMessages([...messages, { text: option, isSent: true }]);
    setIsVisible(false);
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
