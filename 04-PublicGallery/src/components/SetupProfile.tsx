import { useNavigation, useRoute } from '@react-navigation/native';
import {
  ImagePickerAsset,
  launchImageLibraryAsync,
  MediaTypeOptions,
} from 'expo-image-picker';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';

import { BorderedInput } from '~/components/BorderedInput';
import { CustomButton } from '~/components/CustomButton';
import { useUserContext } from '~/contexts/UserContext';
import blankProfile from '~/images/user.png';
import { signOut } from '~/lib/firebaseAuth';
import { createUser } from '~/lib/users';
import { uriToBlob } from '~/lib/fileConvertors';
import {
  RootStackNavigationProps,
  RootStackRouteProps,
} from '~/navigation/RootStackTypes';

export const SetupProfile = () => {
  const [displayName, setDisplayName] = useState('');
  const navigation = useNavigation<RootStackNavigationProps<'Welcome'>>();
  const { setUser } = useUserContext();
  const [image, setImage] = useState<ImagePickerAsset | null>(null);
  const [loading, setLoading] = useState(false);

  const { params } = useRoute<RootStackRouteProps<'Welcome'>>();
  const { uid } = params;

  const onSelectImage = async () => {
    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };

  const onSubmit = async () => {
    setLoading(true);

    let photoUrl: string | null = null;

    if (image) {
      const extension = image?.fileName
        ? (image.fileName.split('.').pop() as string)
        : (image.uri.split('.').pop() as string);
      const storage = getStorage();
      const reference = ref(storage, `/profile/${uid}.${extension}`);

      await uploadBytes(reference, await uriToBlob(image.uri), {
        contentType: image.type,
      });

      photoUrl = await getDownloadURL(reference);
      console.log(reference);
    }

    const user = { id: uid, displayName, photoUrl: photoUrl };
    createUser(user);
    setUser(user);
    setLoading(false);
  };

  const onCancel = () => {
    void signOut();
    navigation.goBack();
  };

  return (
    <View style={styles.block}>
      <Pressable onPress={onSelectImage}>
        <Image
          style={styles.circle}
          source={
            image ? { uri: image.uri } : (blankProfile as ImageSourcePropType)
          }
        />
      </Pressable>
      <View style={styles.form}>
        <BorderedInput
          placeholder='닉네임'
          value={displayName}
          onChangeText={setDisplayName}
          onSubmitEditing={onSubmit}
          returnKeyType='next'
        />
        {loading ? (
          <ActivityIndicator size={32} color='#6200ee' style={styles.spinner} />
        ) : (
          <View style={styles.buttons}>
            <CustomButton title='다음' onPress={onSubmit} hasMarginBottom />
            <CustomButton title='취소' onPress={onCancel} theme='secondary' />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    alignItems: 'center',
    marginTop: 24,
    paddingHorizontal: 16,
    width: '100%',
  },
  circle: {
    backgroundColor: '#cdcdcd',
    borderRadius: 64,
    width: 128,
    height: 128,
  },
  form: {
    marginTop: 16,
    width: '100%',
  },
  spinner: {
    marginTop: 48,
    height: 104,
  },
  buttons: {
    marginTop: 48,
  },
});
