import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// import for unique props

// import style
import palette from "../utils/color.js";

// import Chat component
import MessageBubble from "../component/MessageBubble";
import RecommendContainer from "../Container/RecommendContainer";
import QuickReplyContainer from "../Container/QuickReplyContainer";

import PlaceContainer from "../Container/PlaceContainer";

// import Mongoose for connecting
import axios from "axios";

const Chat = () => {
  //First dummy Text
  const [messages, setMessages] = useState([]); // which contain messages array
  const [inputText, setInputText] = useState(""); // which contain user's text input
  const [recommends, setRecommend] = useState([
    { key: 1, text: "장소 추천받기" },
    { key: 2, text: "도움말" },
    { key: 3, text: "채팅 내용 초기화" },
  ]); //which contain inputText recommend text
  const scrollViewRef = useRef(null);

  const [places, setPlaces] = useState([{}, {}, {}]);
  /**
   * 서버에서 답변을 get합니다.
   */
  //   const getData = async () => {
  //     try {
  //       const response = await axios.get(endpointUrl); // get
  //       const data = response.data;
  //       console.log("Data : ", data);
  //     } catch (error) {
  //       console.error("Error", error);
  //     }
  //   };

  /**
   *
   * @param {} message
   * 메시지를 서버에 post합니다.
   */
  // const fetchData = async (message) => {
  //   try {
  //     const response = await axios.post(
  //       "https://ed1dd9f6ff24.ngrok.io/api/agent/webhook",
  //       {
  //         data: message, // 입력 데이터를 요청의 본문에 포함하여 전송
  //       }
  //     );
  //     const fulfillmentText = response.data.queryResult.fulfillmentText;
  //     console.log("Data Sended", response.data);
  //   } catch (error) {
  //     console.log(" Error : ", error);
  //   }
  // };

  const isMessageAvail = () => {
    if (inputText.trim() === "") return;
    sendMessage(inputText);
  };
  /**
   * @returns call when user enter text Meesage in textInput
   */
  const sendMessage = (inputText) => {
    // New Message Text form
    const newMessage = {
      user: 1,
      text: inputText,
      isSent: true,
      date: getCurrentTime(),
    };

    setMessages([...messages, newMessage]);
    // renderMessage();
    setInputText("");
    chatFlow(newMessage);
    // fetchData(newMessage);
  };

  /**
   * quickReplybubble option을 클릭했을 시의 수행
   * 1. setMessage에 option텍스트를 추가
   * 2. setIsVisible(false) 처리하여 bubble을 화면 상에서 지움
   *  */
  const handleQuickReplyPress = (option) => {
    sendMessage(option);
  };

  /**
   * 추천 텍스트를 클릭했을 시의 수행
   * 텍스트가 message로 들어가게 된다.
   */
  const handleRecommendPress = (recommend) => {
    sendMessage(recommend);
  };
  /**
   *
   * @returns 메시지 버블을 보여준다.
   * text: 메시지 텍스트
   * isSent : 메시지의 수신자 지정 (false : true)
   */
  const renderMessage = () => {
    return messages.map((message, index) =>
      message.isQuickReply ? (
        <QuickReplyContainer
          key={index}
          options={message.options}
          onOptionPress={handleQuickReplyPress}
        />
      ) : message.isPlaceImage ? (
        <PlaceContainer key={index} places={message.places} />
      ) : (
        <MessageBubble
          key={index}
          text={message.text}
          isSent={message.isSent}
          date={message.date}
        />
      )
    );
  };

  /**
   * useEffect 초기 로딩시 텍스트를 업데이트 합니다. setMessges를 통해 기본 폼을 출력합니다.
   */
  useEffect(() => {
    setMessages([
      {
        // key: messages.length + 1,
        user: 1,
        text: "포키즈에 오신것을 환영합니다!",
        isSent: false,
        date: getCurrentTime(),
      },
    ]);
    renderMessage();
  }, []);

  const chatFlow = (inputText) => {
    if (inputText.text == "도움말") {
      setMessages([
        ...messages,
        inputText,
        {
          user: 1,
          text: `아래의 "장소추천받기" 또는 직접 메시지를 입력해 다양한 시설 정보를 물어보세요! 
"OO 근처 주차 정보", "OO 근처 카페 정보"를 입력해 시설 근처의 편의도 체크해 보실 수 있어요. `,
          isSent: false,
          date: getCurrentTime(),
        },
      ]);
    } else if (inputText.text == "장소 추천받기") {
      setMessages([
        ...messages,
        inputText,
        {
          // key: messages.length + 1,
          user: 1,
          text: "아이의 연령대를 선택해주세요.",
          isSent: false,
          date: getCurrentTime(),
        },
        {
          // key: messages.length + 1,
          user: 1,
          text: "",
          isSent: false,
          date: getCurrentTime(),
          isQuickReply: true,

          options: [
            { key: 1, text: "5-7세 어린이" },
            { key: 2, text: "8-13세 초등학생" },
          ],
        },
      ]);
    } else if (
      inputText.text == "5-7세 어린이" ||
      inputText.text == "8-13세 초등학생"
    ) {
      setMessages([
        ...messages,
        inputText,
        {
          user: 1,
          text: "아이에게 가장 잘 어울리는 키워드는 무엇인가요?",
          isSent: false,
          date: getCurrentTime(),
        },
        {
          // key: messages.length + 1,
          user: 1,
          text: "",
          isSent: false,
          date: getCurrentTime(),
          isQuickReply: true,

          options: [
            { key: 1, text: "뛰는 걸 좋아하는" },
            { key: 2, text: "색칠이 재미있는" },
            { key: 3, text: "빵을 만들고 싶어하는" },
            { key: 4, text: "컨셉이 독특한" },
            { key: 5, text: "숲속이 편안한" },
            { key: 6, text: "물놀이가 좋은" },
          ],
        },
      ]);
    } else if (inputText.text == "컨셉이 독특한") {
      setMessages([
        ...messages,
        {
          // key: messages.length + 1,
          user: 1,
          text: "사용자에게 어울리는 시설들이예요!",
          isSent: false,
          date: getCurrentTime(),
        },
        {
          // key: messages.length + 1,
          user: 1,
          text: "",
          isSent: false,
          date: getCurrentTime(),
          isPlaceImage: true,
          places: [
            {
              image: require("../assets/dummy/롤리홀리.png"),
              name: "롤리홀리",
              location: "",
              runningtime: "",
              parking: "",
              tel: "",
            },
            {
              image: require("../assets/dummy/카페팜스프링스.png"),
              name: "카페팜스프링",
              location: "",
              runningtime: "",
              parking: "",
              tel: "",
            },
            {
              image: require("../assets/dummy/쿠방플러스.png"),
              name: "쿠방플러스",
              location: "",
              runningtime: "",
              parking: "",
              tel: "",
            },
            {
              image: require("../assets/dummy/튀튀쿠키.png"),
              name: "튀튀쿠키",
              location: "",
              runningtime: "",
              parking: "",
              tel: "",
            },
          ],
        },
      ]);
    } else if (inputText.text == "채팅 내용 초기화") {
      setMessages([
        {
          // key: messages.length + 1,
          user: 1,
          text: "포키즈에 오신것을 환영합니다!",
          isSent: false,
          date: getCurrentTime(),
        },
      ]);
    } else if (inputText.text == "근처 카페 확인") {
    } else if (inputText.text == "근처 주차장") {
    }
  };

  const handleScrollPosChange = () => {
    scrollViewRef.current.scrollToEnd({ animated: false });
  };

  /**
   * @returns 현재 시간을 얻는다.
   */
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${hours}:${minutes}`;
  };

  /**
   * Return ; View
   */
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text style={styles.mainText}>Chat</Text>
      </View>

      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollViewStyle}
        onContentSizeChange={handleScrollPosChange}
        keyboardDismissMode="on-drag"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {renderMessage()}
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
          <TextInput
            style={styles.textInput}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Enter Text"
          />

          <Pressable
            onPress={isMessageAvail}
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
    paddingHorizontal: 10,
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
