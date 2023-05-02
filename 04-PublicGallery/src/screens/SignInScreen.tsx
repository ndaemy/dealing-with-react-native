import { FirebaseError } from '@firebase/util';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SignButtons } from '~/components/SignButtons';
import { SignForm, SignFormType } from '~/components/SignForm';
import { useUserContext } from '~/contexts/UserContext';
import { signIn, signUp } from '~/lib/firebaseAuth';
import { getUser } from '~/lib/users';
import {
  RootStackNavigationProps,
  RootStackRouteProps,
} from '~/navigation/RootStackTypes';

export const SignInScreen = () => {
  const [form, setForm] = useState<SignFormType>({
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [loading, setLoading] = useState(false);
  const { setUser } = useUserContext();

  const navigation = useNavigation<RootStackNavigationProps<'SignIn'>>();

  const createChangeHandler = (key: keyof typeof form) => (value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const onSubmit = async () => {
    Keyboard.dismiss();
    const { email, password, passwordConfirm } = form;

    if (isSignUp && password !== passwordConfirm) {
      Alert.alert('실패', '비밀번호가 일치하지 않습니다.');
      return;
    }

    setLoading(true);
    const info = { email, password };

    try {
      const { user } = isSignUp ? await signUp(info) : await signIn(info);
      const profile = await getUser(user.uid);

      if (!profile) {
        navigation.navigate('Welcome', { uid: user.uid });
      } else {
        setUser({ id: user.uid, ...profile });
      }
    } catch (e) {
      if (e instanceof FirebaseError) {
        const messages = {
          'auth/email-already-in-use': '이미 사용중인 이메일입니다.',
          'auth/invalid-email': '이메일 형식이 올바르지 않습니다.',
          'auth/user-not-found': '존재하지 않는 사용자입니다.',
          'auth/wrong-password': '비밀번호가 일치하지 않습니다.',
        } as const;
        const msg =
          e.code in messages
            ? messages[e.code as keyof typeof messages]
            : `${isSignUp ? '회원가입' : '로그인'} 실패`;
        Alert.alert('실패', msg);
      } else {
        Alert.alert('실패', '알 수 없는 이유로 실패했습니다.');
      }
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const route = useRoute<RootStackRouteProps<'SignIn'>>();

  const { isSignUp } = route.params ?? {};

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.select({ ios: 'padding' })}
    >
      <SafeAreaView style={styles.fullscreen}>
        <Text style={styles.text}>PublicGallery</Text>
        <View style={styles.form}>
          <SignForm
            isSignUp={isSignUp}
            onSubmit={onSubmit}
            form={form}
            createChangeHandler={createChangeHandler}
          />
          <SignButtons
            isSignUp={isSignUp}
            onSubmit={onSubmit}
            loading={loading}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  fullscreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  form: {
    marginTop: 64,
    width: '100%',
    paddingHorizontal: 16,
  },
});
