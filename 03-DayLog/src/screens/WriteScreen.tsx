import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useContext, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { WriteHeader } from '../components/WriteHeader';
import { WriteEditor } from '../components/WriteEditor';
import { LogContext } from '../contexts/LogContext';
import { NavigationProp } from './types';
import { RootStackParamList } from './RootStack';

type WriteScreenProps = NativeStackScreenProps<RootStackParamList, 'Write'>;

export const WriteScreen = ({ route }: WriteScreenProps) => {
  const log = route.params?.log;

  const [title, setTitle] = useState(log?.title ?? '');
  const [body, setBody] = useState(log?.body ?? '');
  const navigation = useNavigation<NavigationProp>();

  const { onCreate, onModify, onRemove } = useContext(LogContext);

  const onSave = () => {
    if (log) {
      onModify({ ...log, title, body });
      return;
    }

    onCreate({ title, body, date: new Date().toISOString() });
    navigation.goBack();
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
            onRemove(log?.id!);
            navigation.goBack();
          },
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        behavior={Platform.select({ ios: 'padding', android: undefined })}
        style={styles.avoidingView}
      >
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

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoidingView: {
    flex: 1,
  },
});
