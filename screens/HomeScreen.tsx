import React, { useEffect } from "react";
import { Button, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ title: "HomeTitle" });
  }, [navigation]);

  return (
    <View>
      <Button title="Detail 1 열기" onPress={() => navigation.push("Detail", { id: 1 })} />
      <Button title="Detail 2 열기" onPress={() => navigation.push("Detail", { id: 2 })} />
      <Button title="Detail 3 열기" onPress={() => navigation.push("Detail", { id: 3 })} />
      <Button title="Headerless 열기" onPress={() => navigation.push("Headerless")} />
    </View>
  );
};

export default HomeScreen;
