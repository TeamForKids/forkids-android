import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

import Entry from "../component/Entry";
const Splash = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 8000);
  }, []);

  return <View style={styles.container}>{showSplash && <Entry />}</View>;
};
