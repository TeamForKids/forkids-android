import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  FlatList,
  Pressable,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MessageComponent from "../component/MessageComponent";
import { styles } from "../utils/styles";
import socket from "../utils/socket";

import CalendarPicker from "react-native-calendar-picker";
import { SafeAreaView } from "react-native-safe-area-context";

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
  ]);
  return (
    <SafeAreaView>
      <View
        style={{
          flex: 1,
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

export default Calendar;
