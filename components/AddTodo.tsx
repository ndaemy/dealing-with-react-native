import React, { useState } from "react";
import {
  Image,
  Keyboard,
  Platform,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";

import addWhite from "../assets/icons/add_white/add_white.png";

const styles = StyleSheet.create({
  block: {
    backgroundColor: "white",
    height: 64,
    paddingHorizontal: 16,
    borderColor: "#bdbdbd",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    backgroundColor: "#26a69a",
    borderRadius: 24,
  },
  circleWrapper: {
    overflow: "hidden",
    borderRadius: 24,
  },
});

interface AddTodoProps {
  onInsert: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onInsert }) => {
  const [text, setText] = useState("");

  const handlePress = () => {
    onInsert(text);
    setText("");
    Keyboard.dismiss();
  };

  const button = (
    <View style={styles.buttonStyle}>
      <Image source={addWhite} />
    </View>
  );

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="Enter some todo."
        style={styles.input}
        value={text}
        onChangeText={setText}
        onSubmitEditing={handlePress}
        returnKeyType="done"
      />
      {Platform.select({
        ios: (
          <TouchableOpacity activeOpacity={0.5} onPress={handlePress}>
            {button}
          </TouchableOpacity>
        ),
        android: (
          <View style={styles.circleWrapper}>
            <TouchableNativeFeedback onPress={handlePress}>{button}</TouchableNativeFeedback>
          </View>
        ),
      })}
    </View>
  );
};

export default AddTodo;
