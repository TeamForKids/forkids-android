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
import { FontFamily, FontSize } from "../utils/globalstyles";
import CalendarPicker from "react-native-calendar-picker";
import { SafeAreaView } from "react-native-safe-area-context";

import EventBlock from "../component/EventBlock";
import palette from "../utils/color";

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
      event: "dummy event",
      date: "23/05/23",
      url: "http://naver.com/",
    },
    {
      image: require("../assets/dummy_image_place.png"),
      event: "dummy event",
      date: "23/05/23",
      url: "http://naver.com/",
    },
    {
      image: require("../assets/dummy_image_place.png"),
      event: "dummy event",
      date: "23/05/23",
      url: "http://naver.com/",
    },
    {
      image: require("../assets/dummy_image_place.png"),
      event: "dummy event",
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

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Text style={styles.mainText}>Calendar</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CalendarPicker style={styles.calendar} onDateChange={onDateChange} />

        <ScrollView
          styles={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {events.map((event, index) => (
            <EventBlock
              key={index}
              image={event.image}
              event={event.event}
              date={event.date}
              url={event.url}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: palette.lightBase,
  },
  calendar: {
    fontFamily: FontFamily.poppinsSemibold,
  },
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

export default Calendar;
