import * as React from "react";
import { ScrollView, Image, guidestylesheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import palette from "../utils/color";
import guidestyles from "../utils/guidestyles";

const Guide = () => {
  return (
    //👇 Here is Guide 1
    <Swiper>
      <View style={guidestyles.guideview}>
        <View style={guidestyles.ellipseParent}>
          <Image
            style={guidestyles.ellipsePos1}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={guidestyles.ellipsePos2}
            resizeMode="cover"
            source={require("../assets/ellipse-4.png")}
          />
          <Image
            style={guidestyles.ellipsePos3}
            resizeMode="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Image
            style={guidestyles.ellipsePos4}
            resizeMode="cover"
            source={require("../assets/ellipse-3.png")}
          />
          <Image
            style={[guidestyles.vectorIcon, guidestyles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/vector-1.png")}
          />
          <View
            style={[guidestyles.rectangleParent, guidestyles.rectangleLayout]}
          >
            <View
              style={[guidestyles.rectangleView, guidestyles.rectangleLayout]}
            />
            <Text
              style={[guidestyles.text, guidestyles.textPosition]}
            >{`간단한 일상 대화만으로
원하는 시설 정보만 확인하기`}</Text>
          </View>
        </View>
      </View>
    </Swiper>
  );
};

export default Guide;
