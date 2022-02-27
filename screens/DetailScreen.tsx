import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { useRoute } from "@react-navigation/native";

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 48,
  },
  buttons: {
    flexDirection: "row",
  },
});

const IDText = () => {
  const route = useRoute();
  return <Text style={styles.text}>id: {route.params.id}</Text>;
};

type DetailScreenProps = NativeStackScreenProps<RootStackParamList, "Detail">;

const DetailScreen: React.FC<DetailScreenProps> = ({ route, navigation }) => {
  useEffect(() => {
    navigation.setOptions({ title: `Detail - ${route.params.id}` });
  }, [navigation, route.params.id]);

  return (
    <View style={styles.block}>
      <IDText />
      <View style={styles.buttons}>
        <Button
          title="Next"
          onPress={() => navigation.push("Detail", { id: route.params.id + 1 })}
        />
        <Button title="Prev" onPress={() => navigation.pop()} />
        <Button title="Go to home" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  );
};

export default DetailScreen;
