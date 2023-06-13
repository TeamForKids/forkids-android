import React, { useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

//👇🏻 Import the app styles
import { StyleSheet, ScrollView, Image, Text, View } from "react-native";
import palette from "../utils/color.js";

import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import MessageBubble from "../component/MessageBubble";
import QuickReplyContainer from "../Container/QuickReplyContainer";
import PlaceContainer from "../Container/PlaceContainer.js";
import { Pressable } from "react-native";
import Nav from "../BottomTab/Nav.js";
import { useNavigation } from "@react-navigation/native";
/** 첫 시작화면입니다. Entry와 Tutorials를 포함합니다.*/

const Start = ({ handleFirst }) => {
  const places = [
    {
      name: "똑똑블럭 이마트 목동점",
      image: require("../assets/facility-image.png"),
    },
    {
      name: "리틀마운틴 행복한 백화점 목동점",
      image: require("../assets/facility-image1.png"),
    },
  ];
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
          <MessageBubble text={"목동 실내 놀이 공간"} isSent={true} />
          <MessageBubble
            text={"목동의 인기 실내 놀이 시설입니다."}
            isSent={false}
          />
          <PlaceContainer places={places}></PlaceContainer>
        </View>
        <Text style={styles.mainText}>
          {`간단한 대화를 통해 
원하는 시설 정보 확인하기`}
        </Text>
        <View style={styles.mainTextView} />
      </View>

      <View style={styles.background}>
        <Image
          style={styles.vectorIconsub1}
          resizeMode="cover"
          source={require("../assets/vector-1.png")}
        />
        <Image
          style={styles.vectorIconsub2}
          resizeMode="cover"
          source={require("../assets/vector-3.png")}
        />
        <Image
          style={styles.vectorIconsub3}
          resizeMode="cover"
          source={require("../assets/vector-2.png")}
        />
        <Image
          style={styles.vectorIconsub4}
          resizeMode="cover"
          source={require("../assets/vector-4.png")}
        />

        <Text style={styles.mainTextsub}>
          {`채팅 전송을 통해 아이를 위한 
최적의 선택을 
쉽게 얻어보세요`}
        </Text>
        <Pressable onPress={handleFirst} style={styles.startPressable}>
          <Text style={styles.startText}>지금 시작하기</Text>
        </Pressable>
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
  vectorIconsub1: {
    position: "absolute",
    top: "70%",
    width: "110%",
  },
  vectorIconsub2: {
    position: "absolute",
    top: "70%",
    width: "110%",
    // transform: [{ scaleX: -1 }],
  },
  vectorIconsub3: {
    position: "absolute",
    top: "-60%",
    width: "100%",
    height: "80%",
    // transform: [{ scaleY: -1 }],
  },
  vectorIconsub4: {
    position: "absolute",
    top: "-60%",
    width: "110%",
    left: "-10%",
    height: "80%",
    // transform: [{ scaleY: -1 }, { scaleX: -1 }],
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
    position: "absolute",
    bottom: 100,
  },
  mainTextsub: {
    fontFamily: "Poppins_extrabold",
    fontSize: 28,
    textAlign: "center",
    alignSelf: "center",
    width: "50%",
    top: "30%",
  },
  mainTextView: {
    backgroundColor: palette.black,
    // alignSelf: "center",
    width: 20,
    bottom: 10,
    position: "absolute",
  },
  startPressable: {
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: palette.lightPrimary,
    borderRadius: 50,
    elevation: 5,
    flexWrap: "wrap",
    overflow: "visible",
    top: "35%",
    shadowColor: palette.black,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  startText: {
    fontSize: 30,
    paddingHorizontal: 15,
    paddingVertical: 3,
    margin: 3,

    fontFamily: "Poppins_extrabold",
    width: "100%",
    color: palette.white,
  },
});

export default Start;
