import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, useWindowDimensions } from "react-native";

// import TrendBlock component
import TrendBlock from "../component/TrendBlock";

// import View components
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import palette from "../utils/color.js";

//import axios
import axios from "axios";

const Trend = ({ route, navigation }) => {
  const [places, setPlaces] = useState([
    // {
    //   name: "롯데월드 어드벤처",
    //   image:
    //     "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%85%E1%85%A9%E1%86%BA%E1%84%83%E1%85%A6%E1%84%8B%E1%85%AF%E1%86%AF%E1%84%83%E1%85%B3+%E1%84%8B%E1%85%A5%E1%84%83%E1%85%B3%E1%84%87%E1%85%A6%E1%86%AB%E1%84%8E%E1%85%A5.png",
    // },
    // {
    //   name: "코엑스아쿠아리움",
    //   image:
    //     "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8F%E1%85%A9%E1%84%8B%E1%85%A6%E1%86%A8%E1%84%89%E1%85%B3%E1%84%8B%E1%85%A1%E1%84%8F%E1%85%AE%E1%84%8B%E1%85%A1%E1%84%85%E1%85%B5%E1%84%8B%E1%85%AE%E1%86%B7.png",
    // },
    // {
    //   name: "롯데월드 아쿠아리움",
    //   image:
    //     "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%85%E1%85%A9%E1%86%BA%E1%84%83%E1%85%A6%E1%84%8B%E1%85%AF%E1%86%AF%E1%84%83%E1%85%B3+%E1%84%8B%E1%85%A1%E1%84%8F%E1%85%AE%E1%84%8B%E1%85%A1%E1%84%85%E1%85%B5%E1%84%8B%E1%85%AE%E1%86%B7.png",
    // },
    // {
    //   name: "서울스카이",
    //   image:
    //     "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%A5%E1%84%8B%E1%85%AE%E1%86%AF%E1%84%89%E1%85%B3%E1%84%8F%E1%85%A1%E1%84%8B%E1%85%B5.png",
    // },
    // {
    //   name: "아쿠아플라넷 63",
    //   image:
    //     "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A1%E1%84%8F%E1%85%AE%E1%84%8B%E1%85%A1%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%82%E1%85%A6%E1%86%BA.png",
    // },
    // {
    //   name: "송파파크하비오워터킹덤워터파크&찜질스파",
    //   image:
    //     "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%A9%E1%86%BC%E1%84%91%E1%85%A1%E1%84%91%E1%85%A1%E1%84%8F%E1%85%B3%E1%84%92%E1%85%A1%E1%84%87%E1%85%B5%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AF%E1%84%90%E1%85%A5%E1%84%8F%E1%85%B5%E1%86%BC%E1%84%83%E1%85%A5%E1%86%B7%E1%84%8B%E1%85%AF%E1%84%90%E1%85%A5%E1%84%91%E1%85%A1%E1%84%8F%E1%85%B3%26%E1%84%8D%E1%85%B5%E1%86%B7%E1%84%8C%E1%85%B5%E1%86%AF%E1%84%89%E1%85%B3%E1%84%91%E1%85%A1+.jpeg",
    // },
    // {
    //   name: "타요키즈카페 보라매점",
    //   image:
    //     "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%90%E1%85%A1%E1%84%8B%E1%85%AD%E1%84%8F%E1%85%B5%E1%84%8C%E1%85%B3%E1%84%8F%E1%85%A1%E1%84%91%E1%85%A6+%E1%84%87%E1%85%A9%E1%84%85%E1%85%A1%E1%84%86%E1%85%A2%E1%84%8C%E1%85%A5%E1%86%B7.jpeg",
    // },
    // {
    //   name: "다이나믹메이즈 인사동",
    //   image:
    //     "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%82%E1%85%A1%E1%84%86%E1%85%B5%E1%86%A8%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B3+%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A1%E1%84%83%E1%85%A9%E1%86%BC.jpeg",
    // },
    // {
    //   name: "서울어린이대공원",
    //   image:
    //     "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%A5%E1%84%8B%E1%85%AE%E1%86%AF%E1%84%8B%E1%85%A5%E1%84%85%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%B5%E1%84%83%E1%85%A2%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%AF%E1%86%AB.jpeg",
    // },
    // {
    //   name: "SeaLaLa워터파크",
    //   image:
    //     "https://forkids-bucket.s3.ap-northeast-2.amazonaws.com/SeaLaLa%E1%84%8B%E1%85%AF%E1%84%90%E1%85%A5%E1%84%91%E1%85%A1%E1%84%8F%E1%85%B3.jpeg",
    // },
  ]);
  const [loading, setLoading] = useState(false);
  const windowWidth = useWindowDimensions().width;

  const getData = async () => {
    axios
      .get("http://3.34.136.233:5000/home")
      .then((response) => {
        const responseData = response.data;
        // console.log(responseData);
        setPlaces(responseData.data);
      })
      .catch((error) => {
        // 에러 처리
        console.error(error);
      });
  };

  //get data from /path
  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.viewContainer}>
      <View>
        <Text style={styles.mainText}>Trend</Text>
      </View>

      <ScrollView style={[styles.scrollViewStyle, { width: windowWidth }]}>
        <View style={styles.placeBlockConatiner}>
          {places.map((place) => (
            <TrendBlock key={place.id} place={place} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
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
  },
  placeBlockConatiner: {
    //2X5 setting
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
});

export default Trend;
