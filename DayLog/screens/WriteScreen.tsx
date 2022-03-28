import React, { useContext, useState } from 'react';
import {
  Alert,
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

const WriteScreen: React.FC<WriteScreenProps> = ({ route }) => {
  const log = route.params?.log;

  const [title, setTitle] = useState(log?.title ?? '');
  const [body, setBody] = useState(log?.body ?? '');

  const navigation = useNavigation<WriteScreenNavigationProp>();

  const { onCreate, onModify, onRemove } = useContext(LogContext);

  const onSave = () => {
    if (log) {
      onModify({
        id: log.id,
        date: log.date,
        title,
        body,
      });
    } else {
      onCreate({
        title,
        body,
        date: new Date().toISOString(),
      });
    }
    navigation.pop();
  };

  const onAskRemove = () => {
    Alert.alert(
      '삭제',
      '정말로 삭제하시겠어요?',
      [
        { text: '취소', style: 'cancel' },
        {
          text: '삭제',
          onPress: () => {
            // @ts-expect-error
            onRemove({ id: log?.id });
            navigation.pop();
          },
          style: 'destructive',
        },
      ],
      { cancelable: true },
    );
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WriteHeader
          onSave={onSave}
          onAskRemove={onAskRemove}
          isEditing={!!log}
        />
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
