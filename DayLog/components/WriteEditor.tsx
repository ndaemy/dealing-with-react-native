import React, { useRef } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
  block: {
    flex: 1,
    padding: 16,
  },
  titleInput: {
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 16,
    color: '#263238',
    fontWeight: 'bold',
  },
  bodyInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
    color: '#263238',
  },
});

type WriteEditorProps = {
  title?: string;
  body?: string;
  onChangeTitle?: (text: string) => void;
  onChangeBody?: (text: string) => void;
};

const WriteEditor: React.FC<WriteEditorProps> = ({
  title,
  body,
  onChangeTitle,
  onChangeBody,
}) => {
  const bodyRef = useRef<TextInput>(null);

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="Enter title"
        style={styles.titleInput}
        returnKeyType="next"
        onChangeText={onChangeTitle}
        value={title}
        onSubmitEditing={() => {
          bodyRef.current!.focus();
        }}
      />
      <TextInput
        placeholder="Record your today."
        style={styles.bodyInput}
        multiline
        textAlignVertical="top"
        onChangeText={onChangeBody}
        value={body}
        ref={bodyRef}
      />
    </View>
  );
};

export default WriteEditor;
