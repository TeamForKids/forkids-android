import React, { useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

//👇🏻 Import the app styles
import { StyleSheet, ScrollView, Image, Text, View } from "react-native";
import palette from "../utils/color.js";

import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import MessageBubble from "../component/MessageBubble";
import QuickReplyContainer from "../Container/QuickReplyContainer";
/** 첫 시작화면입니다. Entry와 Tutorials를 포함합니다.*/

const Start = () => {
  return (
    // <View>
    <Swiper>
      <View style={styles.background}>
        <Image
          style={styles.ellipsePos1}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={styles.ellipsePos2}
          resizeMode="cover"
          source={require("../assets/ellipse-4.png")}
        />

        <Image
          style={styles.ellipsePos3}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={styles.ellipsePos4}
          resizeMode="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector-1.png")}
        />
        <View style={styles.messagestyle}>
          <MessageBubble
            text={"아이의 연령대를 선택해주세요."}
            isSent={false}
          />
          <QuickReplyContainer
            key={1}
            options={[
              { key: 1, text: "5-7세 어린이" },
              { key: 2, text: "8-13세 초등학생" },
            ]}
            onOptionPress={() => {}}
          />
          <MessageBubble text={"5-7세 어린이"} isSent={true} />
          <MessageBubble
            text={"아이와 가장 맞는 키워드를 선택해주세요."}
            isSent={false}
          />
          <QuickReplyContainer
            key={2}
            options={[
              { key: 1, text: "책을 좋아하는" },
              { key: 2, text: "운동을 좋아하는" },
              { key: 3, text: "그림을 그리고 싶은" },
              { key: 4, text: "숲을 좋아하는" },
              { key: 5, text: "만들기가 재미있는" },
            ]}
            onOptionPress={() => {}}
          />
          <MessageBubble text={"운동을 좋아하는"} isSent={true} />
        </View>
        <Text style={styles.mainText}>
          {`맞춤 코멘트 선택으로 
아이에게 딱 맞는 장소찾기`}
        </Text>
        <View style={styles.mainTextView} />
      </View>
    </Swiper>
    // </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: palette.tutoback,
    flex: 1,
  },
  ellipsePos1: {
    position: "absolute",
    top: "45%",
    left: "23%",
  },
  ellipsePos2: {
    position: "absolute",
    top: "25%",
    left: "10%",
  },
  ellipsePos3: {
    position: "absolute",
    top: "15%",
    left: "45%",
  },
  ellipsePos4: {
    top: "25%",
    left: "-30%",
    position: "absolute",
  },
  vectorIcon: {
    position: "absolute",
    top: "55%",
    width: "110%",
  },
  messagestyle: {
    alignSelf: "center",
    width: "75%",
    top: "15%",
  },
  mainText: {
    fontFamily: "Poppins_extrabold",
    fontSize: 28,
    textAlign: "center",
    alignSelf: "center",
    width: "65%",
    top: "25%",
  },
  mainTextView: {
    backgroundColor: palette.black,
    // alignSelf: "center",
    width: 20,
    top: 40,
  },
});

export default Start;
