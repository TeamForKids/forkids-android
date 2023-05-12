import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import palette from "../utils/color";
import { Padding, Border, FontFamily, Color, FontSize } from "../GlobalStyles";
const Entry = () => {
  return (
    <View style={styles.entry}>
      <Text style={styles.text}>{`아이들의
더 멋진
추억을 위해`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    top: 290,
    left: 41,
    fontSize: FontSize.size_31xl,
    fontWeight: "700",
    fontFamily: FontFamily.promptBold,
    color: Color.white,
    textAlign: "left",
  },
  entry: {
    backgroundColor: Color.basePrimary,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});
export default Entry;
