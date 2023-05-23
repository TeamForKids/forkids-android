import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

//👇🏻 Import Swiper for Multiple Slides
import SwiperView from "react-native-swiper-view";

//👇🏻 Import the app styles
import { styles } from "../utils/globalstyles";
import Guide1 from "../component/Guide1";
import Guide2 from "../component/Guide2";
import Guide3 from "../component/Guide";

/** 첫 시작화면입니다. Entry와 Tutorials를 포함합니다.*/
const Start = () => {
  return (
    <SafeAreaView style={styles.loginscreen}>
      <SwiperView>
        <Guide1 />
        <Guide2 />
        <Guide3 />
      </SwiperView>
    </SafeAreaView>
  );
};

export default Start;
