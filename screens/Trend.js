import React, { useEffect, useLayoutEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import MessageComponent from "../component/MessageComponent";

// import PlaceBlock component
import PlaceBlock from "../component/PlaceBlock";

// import View components
import { ScrollView, View, StatusBar, StyleSheet } from "react-native";
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
      <ScrollView style={styles.scrollcontainer}>
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

const styles = StyleSheet.create({
  scrollcontainer: {
    flex: 1,
  },
});

export default Trend;
