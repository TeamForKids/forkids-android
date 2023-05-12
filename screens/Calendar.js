import React, { useLayoutEffect, useState, useEffect } from "react";
import { View, TextInput, Text, FlatList, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MessageComponent from "../component/MessageComponent";
import { styles } from "../utils/styles";
import socket from "../utils/socket";

import CalendarPicker from "react-native-calendar-picker";
const Calendar = ({ route, navigation }) => {
  [date, setDate] = useState(new Date());

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CalendarPicker onDateChange={setDate} />
    </View>
  );
};

export default Calendar;
