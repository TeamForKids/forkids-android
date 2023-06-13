import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import PlaceBlock component
import PlaceBlock from "../component/PlaceBlock";

// import View components
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// import style
import palette from "../utils/color.js";

import axios from "axios";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import GuChoice from "./GuChoice";
const Place = ({ route, navigation }) => {
  const [places, setPlaces] = useState([
    {
      name: "한국은행 화폐박물관",
      image:
        "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%92%E1%85%AA%E1%84%91%E1%85%A8%E1%84%87%E1%85%A1%E1%86%A8%E1%84%86%E1%85%AE%E1%86%AF%E1%84%80%E1%85%AA%E1%86%AB.jpeg",
    },
    {
      name: "서소문성지역사박물관",
      image:
        "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%A5%E1%84%83%E1%85%A2%E1%84%86%E1%85%AE%E1%86%AB%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%A7%E1%86%AB%E1%84%89%E1%85%A1%E1%84%87%E1%85%A1%E1%86%A8%E1%84%86%E1%85%AE%E1%86%AF%E1%84%80%E1%85%AA%E1%86%AB.png",
    },
    {
      name: "덕수궁대한제국역사관",
      image:
        "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%83%E1%85%A5%E1%86%A8%E1%84%89%E1%85%AE%E1%84%80%E1%85%AE%E1%86%BC%E1%84%83%E1%85%A2%E1%84%92%E1%85%A1%E1%86%AB%E1%84%8C%E1%85%A6%E1%84%80%E1%85%AE%E1%86%A8%E1%84%8B%E1%85%A7%E1%86%A8%E1%84%89%E1%85%A1%E1%84%80%E1%85%AA%E1%86%AB.png",
    },
    {
      name: "한국금융사박물관",
      image:
        "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%AE%E1%86%A8%E1%84%80%E1%85%B3%E1%86%B7%E1%84%8B%E1%85%B2%E1%86%BC%E1%84%89%E1%85%A1%E1%84%87%E1%85%A1%E1%86%A8%E1%84%86%E1%85%AE%E1%86%AF%E1%84%80%E1%85%AA%E1%86%AB.png",
    },
    {
      name: "디키디키",
      image:
        "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%83%E1%85%B5%E1%84%8F%E1%85%B5%E1%84%83%E1%85%B5%E1%84%8F%E1%85%B5.jpeg",
    },
    {
      name: "키즈카페 몽슈슈",
      image:
        "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8F%E1%85%B5%E1%84%8C%E1%85%B3%E1%84%8F%E1%85%A1%E1%84%91%E1%85%A6+%E1%84%86%E1%85%A9%E1%86%BC%E1%84%89%E1%85%B2%E1%84%89%E1%85%B2.png",
    },
    {
      name: "프로맘킨더 신세계백화점 본점",
      image:
        "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%86%E1%85%A1%E1%86%B7%E1%84%8F%E1%85%B5%E1%86%AB%E1%84%83%E1%85%A5+%E1%84%89%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A6%E1%84%80%E1%85%A8%E1%84%87%E1%85%A2%E1%86%A8%E1%84%92%E1%85%AA%E1%84%8C%E1%85%A5%E1%86%B7+%E1%84%87%E1%85%A9%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%B7.jpeg",
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [containerWidth, setContainerWidth] = useState(0);
  const gunavigation = useNavigation();
  const [guchoice, setguchoice] = useState({});
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("http://3.34.136.233:5000/region/중구"); // Replace with your server URL
  //     if (!response.ok) {
  //       throw new Error("Error fetching data");
  //     }
  //     const data = await response.json();
  //     setPlaces(data.data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     setLoading(false);
  //   }
  // };
  // //get data from /path
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const handleLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    setContainerWidth(width);
  };

  const handleGuPress = (data) => {
    setguchoice(data);
  };
  // if (loading) {
  //   return (
  //     <View>
  //       <Text>Loading...</Text>
  //     </View>
  //   );
  // }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Pressable
          onPress={() => {
            gunavigation.navigate("GuChoice");
          }}
        >
          <Text style={styles.mainText}>Place</Text>
        </Pressable>
      </View>
      <ScrollView style={styles.scrollViewStyle} onLayout={handleLayout}>
        <View
          style={[styles.placeBlockConatiner, { width: containerWidth * 0.8 }]}
        >
          {places.map((place, index) => (
            <PlaceBlock key={index} place={place} />
          ))}
        </View>
      </ScrollView>
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
    padding: 5,
    flexGrow: 1,
    alignContent: "center",
  },
  placeBlockConatiner: {
    flexDirection: "column",
  },
});

export default Place;
