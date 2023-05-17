import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  ScrollView,
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
  [date, setDate] = useState(new Date());
  const [events, setEvent] = useState([
    {
      image: require("../assets/dummy_image_place.jpg"),
      event: "dummy event",
      date: "23/05/23",
      url: "dummy",
    },
    {
      image: require("../assets/dummy_image_place.jpg"),
      event: "dummy event",
      date: "23/05/23",
      url: "dummy",
    },
    {
      image: require("../assets/dummy_image_place.jpg"),
      event: "dummy event",
      date: "23/05/23",
      url: "dummy",
    },
    {
      image: require("../assets/dummy_image_place.jpg"),
      event: "dummy event",
      date: "23/05/23",
      url: "dummy",
    },
  ]);
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.mainText}>Calendar</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CalendarPicker onDateChange={setDate} />
        <ScrollView styles={{ justifyContent: "center", alignItems: "center" }}>
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
  mainText: {
    fontFamily: FontFamily.poppinsBold,
    fontSize: 30,
    padding: 30,
    color: palette.lightPrimary,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Calendar;
