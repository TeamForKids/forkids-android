import React, { useLayoutEffect, useState } from "react";
import { View, TextInput, Text, FlatList, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MessageComponent from "../component/MessageComponent";
import { styles } from "../utils/styles";
import socket from "../utils/socket";

// 👇🏻Here is for Chatting Component
import Chatting from "../component/Chatting";

const Messaging = ({ route, navigation }) => {
  return <Chatting />;
};

export default Messaging;
