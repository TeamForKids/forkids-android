import React, { useLayoutEffect, useState } from "react";
import { ScrollView, View, StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MessageComponent from "../component/MessageComponent";
import { styles } from "../utils/styles";
// import PlaceBlock component
import PlaceBlock from "../component/PlaceBlock";
import { SafeAreaView } from "react-native-safe-area-context";

const Trend = ({ route, navigation }) => {
  const [places, setPlaces] = useState([
    {
      image: require("../assets/dummy_image_place.jpg"),
      place: "Eiffel Tower",
      location: "Paris, France",
    },
  ]);

  return (
    <SafeAreaView>
      <ScrollView>
        {places.map((place, index) => (
          <PlaceBlock
            key={index}
            image={place.image}
            place={place.place}
            location={place.location}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Trend;
