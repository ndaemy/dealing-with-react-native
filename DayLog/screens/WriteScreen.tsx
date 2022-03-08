import React, { useContext, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import WriteHeader from '../components/WriteHeader';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './RootStack';
import WriteEditor from '../components/WriteEditor';
import LogContext from '../contexts/LogContext';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoidingView: {
    flex: 1,
  },
});

export type WriteScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Write'
>;

export type WriteScreenNavigationProp = WriteScreenProps['navigation'];

const WriteScreen: React.FC<WriteScreenProps> = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const navigation = useNavigation<WriteScreenNavigationProp>();

  const { onCreate } = useContext(LogContext);
  const onSave = () => {
    onCreate({
      title,
      body,
      date: new Date().toISOString(),
    });
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WriteHeader onSave={onSave} />
        <WriteEditor
          title={title}
          body={body}
          onChangeTitle={setTitle}
          onChangeBody={setBody}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default WriteScreen;
