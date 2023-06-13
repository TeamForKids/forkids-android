import React, {
  useEffect,
  useState,
  useLayoutEffect,
  useCallback,
} from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  Pressable,
  Modal,
  useWindowDimensions,
} from "react-native";
import { StyleSheet } from "react-native";

//import modal component
import PlaceModal from "./PlaceModal";

//import Styles
import palette from "../utils/color.js";
import axios from "axios";
/**
 *
 * @returns image name block
 * require image URL, name name TEXT, location name TEXT, running time NUM
 * Trend page location block
 * Which is used in Place Screen
 */
const PlaceBlock = ({ place }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const windowWidth = useWindowDimensions().width;
  const componentWidth = windowWidth * 0.95;
  const [placeinfo, setPlaces] = useState({});
  const handleModalVisible = () => {
    setIsModalVisible(!isModalVisible);
  };

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("http://3.34.136.233:5000/region/중구"); // Replace with your server URL
  //     if (!response.ok) {
  //       throw new Error("Error fetching data");
  //     }
  //     const data = await response.json();
  //     setPlaces(data.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  // //get data from /path
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const requestBody = {
    name: place.name,
  };

  axios
    .get("http://3.34.136.233:5000/chat/detailPlace", { data: requestBody })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  return (
    <View>
      {isModalVisible && (
        <PlaceModal info={placeinfo} onModalPress={handleModalVisible} />
      )}
      <Pressable
        onPress={handleModalVisible}
        style={[styles.placeBlockPressable, { width: componentWidth }]}
        borderRadius={10}
      >
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.image} source={{ uri: place.image }} />
          <View style={styles.textContainer}>
            <Text style={styles.name}> {place.name}</Text>
            <Text style={styles.location}>{placeinfo.address}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    // width: "20%",
    height: 80,
    width: 80,
    margin: 3,
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    margin: 5,
    padding: 2,
  },
  name: {
    fontSize: 16,
    alignSelf: "flex-start",
    fontFamily: "Poppins_bold",
  },
  location: {
    fontSize: 12,
    alignSelf: "flex-start",
    fontFamily: "Poppins_regular",
  },
  placeBlockPressable: {
    backgroundColor: palette.white,
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 3,
    overflow: "visible",
    elevation: 10,
    borderRadius: 15,
    flexDirection: "row",

    //for shadow
    shadowColor: palette.black,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  placeBlockImage: {
    margin: 3,
    borderRadius: 20,
    height: 80,
    width: 80,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
});

export default PlaceBlock;
