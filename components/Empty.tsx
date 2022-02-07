import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import youngAndHappy from "../assets/images/young_and_happy.png";

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 240,
    height: 179,
    marginBottom: 16,
  },
  description: {
    fontSize: 24,
    color: "#9e9e9e",
  },
});

const Empty = () => {
  return (
    <View style={styles.block}>
      <Image source={youngAndHappy} style={styles.image} resizeMode="cover" />
      <Text style={styles.description}>Yeeh! There is no todo.</Text>
    </View>
  );
};

export default Empty;
