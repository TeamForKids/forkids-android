import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import CalendarPicker from "react-native-calendar-picker";
import { SafeAreaView } from "react-native-safe-area-context";

import EventBlock from "../component/EventBlock";
import palette from "../utils/color";
import { Octicons } from "@expo/vector-icons";

/**
 *
 * @param {} param
 * @returns calendar screen
 *
 */
const Calendar = ({ route, navigation }) => {
  // dummy Text
  // setEvent fetch함
  const [events, setEvent] = useState([
    {
      image: require("../assets/dummy_image_place.png"),
      name: "dummy event",
      date: "23/05/23",
      url: "http://naver.com/",
    },
    {
      image: require("../assets/dummy_image_place.png"),
      name: "dummy event",
      date: "23/05/23",
      url: "http://naver.com/",
    },
    {
      image: require("../assets/dummy_image_place.png"),
      name: "dummy event",
      date: "23/05/23",
      url: "http://naver.com/",
    },
    {
      image: require("../assets/dummy_image_place.png"),
      name: "dummy event",
      date: "23/05/23",
      url: "http://naver.com/",
    },
    {
      image: require("../assets/dummy_image_place.png"),
      name: "dummy event",
      date: "23/05/23",
      url: "http://naver.com/",
    },
  ]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [filteredData, setFilteredData] = useState([]); // 조건에 맞는 정보를 담을 상태

  const onDateChange = (date) => {
    console.log(date); // form '2023-05-18T03:00:00.000Z'

    setSelectedDate(date);
  };

  useEffect(() => {
    filterData();
  }, [selectedDate]);

  const filterData = () => {
    const filtered = events.filter((item) => {
      return item.date === selectedDate;
    });

    setFilteredData(filtered); // 필터링된 정보를 상태로 업데이트
  };

  const windowWidth = useWindowDimensions().width;
  const componentWidth = windowWidth * 0.95;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text style={styles.mainText}>Calendar</Text>
      </View>

      <View style={styles.calendar}>
        <CalendarPicker
          monthTitleStyle={{
            fontFamily: "Poppins_bold",
            color: palette.lightPrimary,
          }}
          yearTitleStyle={{
            fontFamily: "Poppins_bold",
            color: palette.darkBase,
          }}
          width={componentWidth}
          selectedDayTextColor={palette.white}
          textStyle={{
            fontFamily: "Poppins_regular",
            color: palette.black,
          }}
          previousTitle={
            <Octicons name="chevron-left" size={24} color={palette.black} />
          }
          nextTitle={
            <Octicons name="chevron-right" size={24} color={palette.black} />
          }
          onDateChange={onDateChange}
          selectedDayColor={palette.lightPrimary}
        />
      </View>

      <ScrollView
        styles={{
          alignItems: "center",
          justifyContent: "center",
          padding: 5,
        }}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          {events.map((event, index) => (
            <EventBlock key={index} event={event} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: palette.lightBase,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  calendar: {
    padding: 10,
    margin: 15,
    backgroundColor: palette.white,
    alignContent: "center",
    fontFamily: "Poppins_regular",
    borderRadius: 15,

    overflow: "visible",
    shadowColor: palette.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 10,
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
});

export default Calendar;
