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
import RecommendContainer from "../Container/RecommendContainer";
import QuickReplyContainer from "../Container/QuickReplyContainer";
import PlaceContainer from "../Container/PlaceContainer";

// import Mongoose for connecting
import mongoose, { mongo } from "mongoose";
import axios from "axios";

const Chat = () => {
  //First dummy Text
  const [messages, setMessages] = useState([]); // which contain messages array

  const [inputText, setInputText] = useState(""); // which contain user's text input

  const [recommends, setRecommend] = useState([
    { key: 1, text: "성수 근처의 놀 곳을 선정해줘!" },
    { key: 2, text: "장소 추천받기" },
    { key: 3, text: "도움말" },
  ]);

  const [options, setOptions] = useState([
    { key: 1, text: "5-7세 어린이" },
    { key: 2, text: "8-13세 초등학생" },
  ]);

  // for PlaceContainer
  const [places, setPlaces] = useState([
    {
      image: require("../assets/dummy_image_place.png"),
      name: "Place Name",
      location: "위치 : 서울 은평구 불광로 283",
      runningtime: "운영 시간 : 오전 9시~ 오후 10시",
      parking: "주차 정보 : XXX",
      tel: "전화 번호 : 02-XXX-XXXX",
    },
    {
      image: require("../assets/dummy_image_place.png"),
      name: "Place Name",
      location: "위치 : 서울 은평구 불광로 283",
      runningtime: "운영 시간 : 오전 9시~ 오후 10시",
      parking: "주차 정보 : XXX",
      tel: "전화 번호 : 02-XXX-XXXX",
    },
    {
      image: require("../assets/dummy_image_place.png"),
      name: "Place Name",
      location: "위치 : 서울 은평구 불광로 283",
      runningtime: "운영 시간 : 오전 9시~ 오후 10시",
      parking: "주차 정보 : XXX",
      tel: "전화 번호 : 02-XXX-XXXX",
    },
    {
      image: require("../assets/dummy_image_place.png"),
      name: "Place Name",
      location: "위치 : 서울 은평구 불광로 283",
      runningtime: "운영 시간 : 오전 9시~ 오후 10시",
      parking: "주차 정보 : XXX",
      tel: "전화 번호 : 02-XXX-XXXX",
    },
    {
      image: require("../assets/dummy_image_place.png"),
      name: "Place Name",
      location: "위치 : 서울 은평구 불광로 283",
      runningtime: "운영 시간 : 오전 9시~ 오후 10시",
      parking: "주차 정보 : XXX",
      tel: "전화 번호 : 02-XXX-XXXX",
    },
  ]);

  /**
   * @returns call when user enter text Meesage in textInput
   */
  const sendMessage = () => {
    if (inputText.trim() === "") return;

    // New Message Text form
    const newMessage = {
      key: messages.length + 1,
      user: 1,
      text: inputText,
      isSent: true,
      date: getCurrentTime(),
    };

    setMessages([...messages, newMessage]);
    setInputText("");
  };

  const [isVisible, setIsVisible] = useState(true);

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

  useEffect(() => {
    setMessages([
      ...messages,
      {
        key: messages.length + 1,
        user: 1,
        text: "여기 포키즈에서 다양한 질문을 해보세요!",
        isSent: false,
        date: getCurrentTime(), // getCurrentTime 이 형식 미지정으로 렌더링이 불가능함
      },
    ]);
  }, []);

  /**
   * quickReplybubble option을 클릭했을 시의 수행
   * 1. setMessage에 option텍스트를 추가
   * 2. setIsVisible(false) 처리하여 bubble을 화면 상에서 지움
   *  */
  const handleQuickReplyPress = (option) => {
    const newMessage = {
      key: messages.length + 1,
      user: 1,
      text: option,
      isSent: true,
      date: getCurrentTime(),
    };

    setMessages([...messages, newMessage]);

    setIsVisible(false);
  };

  /**
   * 추천 텍스트를 클릭했을 시의 수행
   * 텍스트가 message로 들어가게 된다.
   */
  const handleRecommendPress = (recommend) => {
    setMessages([
      ...messages,
      { text: recommend, isSent: true, date: getCurrentTime() },
    ]);
  };

  const handlePlaceSet = () => {};

  /**
   * @returns 현재 시간을 얻는다.
   */
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${hours}:${minutes}`;
  };

  // View
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text style={styles.mainText}>Chat</Text>
      </View>

      <ScrollView style={styles.scrollViewStyle}>
        {renderMessage()}
        {isVisible && (
          <QuickReplyContainer
            options={options}
            onOptionPress={handleQuickReplyPress}
          />
        )}
        <PlaceContainer places={places} />
      </ScrollView>

      <View
        style={{
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <RecommendContainer // which recommend comments
          recommends={recommends}
          onRecommendPress={handleRecommendPress}
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 8,
            paddingVertical: 10,
            backgroundColor: palette.white,
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainText: {
    color: palette.lightPrimary,
    fontFamily: "Poppins_bold",
    fontSize: 30,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: palette.lightBase,
  },
  scrollViewStyle: {
    padding: 8,
    flexGrow: 1,
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
    fontFamily: "Poppins_regular",
    fontSize: 14,
  },
});

export default Chat;
