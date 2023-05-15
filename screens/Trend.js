import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MessageComponent from "../component/MessageComponent";

// import PlaceBlock component
import PlaceBlock from "../component/PlaceBlock";

// import View components
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Trend = ({ route, navigation }) => {
  const [places, setPlaces] = useState([
    {
      image: require("../assets/dummy_image_place.jpg"),
      place: "1",
      location: "Paris, France",
    },
    {
      image: require("../assets/dummy_image_place.jpg"),
      place: "2",
      location: "Paris, France",
    },
    {
      image: require("../assets/dummy_image_place.jpg"),
      place: "3",
      location: "Paris, France",
    },
    {
      image: require("../assets/dummy_image_place.jpg"),
      place: "4",
      location: "Paris, France",
    },
    {
      image: require("../assets/dummy_image_place.jpg"),
      place: "4",
      location: "Paris, France",
    },
    {
      image: require("../assets/dummy_image_place.jpg"),
      place: "4",
      location: "Paris, France",
    },
    {
      image: require("../assets/dummy_image_place.jpg"),
      place: "4",
      location: "Paris, France",
    },
    {
      image: require("../assets/dummy_image_place.jpg"),
      place: "4",
      location: "Paris, France",
    },
  ]);

  return (
    <SafeAreaView style={styles.viewContainer}>
      <View>
        <Text style={styles.mainText}>Trend</Text>
      </View>

      <ScrollView style={styles.scrollViewStyle}>
        <View style={styles.placeBlockConatiner}>
          {places.map((place, index) => (
            <PlaceBlock
              key={index}
              image={place.image}
              place={place.place}
              location={place.location}
            />
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
    fontSize: 30,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollViewStyle: {
    padding: 10,
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
