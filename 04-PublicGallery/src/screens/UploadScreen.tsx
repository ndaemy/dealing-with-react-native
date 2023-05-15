import { useNavigation, useRoute } from '@react-navigation/native';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Animated,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import { v4 as uuidv4 } from 'uuid';

import { IconRightButton } from '~/components/IconRightButton';
import { useUserContext } from '~/contexts/UserContext';
import {
  RootStackNavigationProps,
  RootStackRouteProps,
} from '~/navigation/RootStackTypes';
import { uriToBlob } from '~/lib/fileConvertors';
import { createPost } from '~/lib/posts';

export const UploadScreen = () => {
  const route = useRoute<RootStackRouteProps<'Upload'>>();
  const { image } = route.params;
  const { width } = useWindowDimensions();
  const animation = useRef(new Animated.Value(width)).current;
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [description, setDescription] = useState('');
  const navigation = useNavigation<RootStackNavigationProps<'Upload'>>();
  const { user } = useUserContext();

  const onSubmit = useCallback(async () => {
    navigation.pop();
    const asset = image.assets![0];

    const extension = asset.fileName?.split('.').pop();
    const storage = getStorage();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const randomString = uuidv4() as string;
    const reference = ref(
      storage,
      `/photo/${user!.id}/${randomString}.${extension || ''}`
    );

    await uploadBytes(reference, await uriToBlob(asset.uri), {
      contentType: asset.type,
    });
    const photoURL = await getDownloadURL(reference);
    await createPost({ user: user!, photoURL, description });
  }, [image, user, description, navigation]);

  useEffect(() => {
    const didShow = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardOpen(true);
    });
    const didHide = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardOpen(false);
    });

    return () => {
      didShow.remove();
      didHide.remove();
    };
  }, []);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isKeyboardOpen ? 0 : width,
      useNativeDriver: false,
      duration: 150,
      delay: 50,
    }).start();
  }, [isKeyboardOpen, width, animation]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <IconRightButton name='send' onPress={onSubmit} />,
    });
  }, [navigation, onSubmit]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.select({ ios: 'height' })}
      style={styles.block}
      keyboardVerticalOffset={Platform.select({ ios: 180 })}
    >
      <View style={styles.block}>
        <Animated.Image
          source={{ uri: image.assets![0].uri }}
          style={[styles.image, { height: animation }]}
          resizeMode='cover'
        />
        <TextInput
          style={styles.input}
          multiline
          placeholder='이 사진에 대한 설명을 입력하세요...'
          textAlignVertical='top'
          value={description}
          onChangeText={setDescription}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  image: {
    width: '100%',
  },
  input: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    flex: 1,
    fontSize: 16,
  },
});
