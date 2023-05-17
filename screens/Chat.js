import React, { useState, useCallback, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from "react-native";

// import icon
import { Ionicons } from "@expo/vector-icons";

// import style
import palette from "../utils/color";
import { FontFamily, FontSize } from "../utils/globalstyles";

// import Chat component
import MessageBubble from "../component/MessageBubble";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const sendMessage = () => {
    if (inputText.trim() === "") return;

    // New Message Text form
    const newMessage = {
      id: messages.length + 1,
      user: 1,
      text: inputText,
    };

    setMessages([...messages, newMessage]);
    setInputText("");
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text style={styles.mainText}>Chat</Text>
      </View>
      <ScrollView>{renderMessage()}</ScrollView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 8,
          backgroundColor: palette.white,
          padding: 10,
        }}
      >
        <TextInput
          style={{
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
          }}
          value={inputText}
          onChangeText={setInputText}
          placeholder="This is example of Text"
        />

        <TouchableOpacity
          onPress={sendMessage}
          style={{
            padding: 10,
            backgroundColor: palette.lightPrimary,
            borderRadius: 10,
          }}
        >
          <Ionicons name="paper-plane-outline" size={20} color="white" />
        </TouchableOpacity>
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
});

export default Chat;
