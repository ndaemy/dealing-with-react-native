import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: "#26a69a",
  },
  block: {
    padding: 16,
    backgroundColor: "#26a69a",
  },
  dateText: {
    fontSize: 24,
    color: "white",
  },
});

interface DateHeadProps {
  date: Date;
}

const DateHead: React.FC<DateHeadProps> = ({ date }) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formatted = `${year}년 ${month}월 ${day}일`;

  const { top } = useSafeAreaInsets();

  return (
    <>
      <View style={[styles.statusBarPlaceholder, { height: top }]} />
      <StatusBar backgroundColor="#26a69a" barStyle="light-content" />
      <View style={styles.block}>
        <Text style={styles.dateText}>{formatted}</Text>
      </View>
    </>
  );
};

export default DateHead;
