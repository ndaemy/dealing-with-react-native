import React from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type HeaderlessScreenProps = NativeStackScreenProps<RootStackParamList, "Headerless">;

const HeaderlessScreen: React.FC<HeaderlessScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>There is no header?</Text>
        <Button title="Back" onPress={() => navigation.pop()} />
      </View>
    </SafeAreaView>
  );
};

export default HeaderlessScreen;
