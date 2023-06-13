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
import palette from "../utils/color.js";
import { Octicons } from "@expo/vector-icons";

import axios from "axios";
/**
 *
 * @param {} param
 * @returns calendar screen
 *
 */
const Calendar = ({ route, navigation }) => {
  // dummy Text
  // setEvent fetch함
  const [events, setEvent] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [filteredData, setFilteredData] = useState([]); // 조건에 맞는 정보를 담을 상태
  const fetchData = async (selectedDate) => {
    //   try {
    //     const response = await axios.get(
    //       "http://3.34.136.233:5000/calendar/event"
    //     );
    //     console.log(response.data);
    //     // 요청이 성공하면 서버 응답 데이터를 콘솔에 출력합니다.
    //   } catch (error) {
    //     console.error(error);
    //     // 요청이 실패하면 에러를 콘솔에 출력합니다.
    //   }
    // };

    axios
      .get("http://3.34.136.233:5000/calendar/event/date", {
        data: { startDate: "2023.12.5 0:00" },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        // 에러 처리 로직을 작성합니다.
        console.error(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  // useEffect(() => {
  //   // fetchData();
  //   filterData();
  // }, [selectedDate]);

  const onDateChange = (date) => {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    const formattedDateString = `${year}.${month}.${day} 0:00`;
    setSelectedDate(formattedDateString);
    // fetchData(selectedDate);
  };

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
          {events ? (
            <View>
              <Text> 해당 요일에 행사하는 이벤트가 없습니다.</Text>
            </View>
          ) : (
            events.map((event, index) => (
              <EventBlock key={index} event={event} />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: palette.white,
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
