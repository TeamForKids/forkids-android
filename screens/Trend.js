import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, useWindowDimensions } from "react-native";

// import TrendBlock component
import TrendBlock from "../component/TrendBlock";

// import View components
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import palette from "../utils/color.js";

//import axios
import axios from "axios";

const Trend = ({ route, navigation }) => {
  const [places, setPlaces] = useState();
  const [loading, setLoading] = useState(true);
  const windowWidth = useWindowDimensions().width;

  const fetchData = async () => {
    try {
      const response = await fetch("http://3.34.136.233:5000/home"); // Replace with your server URL
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      const data = await response.json();
      setPlaces(data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  //get data from /path
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.viewContainer}>
      <View>
        <Text style={styles.mainText}>Trend</Text>
      </View>

      <ScrollView style={[styles.scrollViewStyle, { width: windowWidth }]}>
        <View style={styles.placeBlockConatiner}>
          {places.map((place, index) => (
            <Text>{place.name}</Text>
            // <TrendBlock id={place.id} place={place.name} />
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
  scrollViewStyle: {
    padding: 5,
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
