import { useNavigation } from '@react-navigation/native';
import {
  ImagePickerOptions,
  ImagePickerResult,
  launchCameraAsync,
  launchImageLibraryAsync,
  MediaTypeOptions,
  useCameraPermissions,
} from 'expo-image-picker';
import { useState } from 'react';
import {
  ActionSheetIOS,
  Alert,
  Platform,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { UploadModeModal } from '~/components/UploadModeModal';
import { RootStackNavigationProps } from '~/navigation/RootStackTypes';

const TABBAR_HEIGHT = 49;

export const CameraButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<RootStackNavigationProps<'MainTab'>>();

  const [status, requestPermission] = useCameraPermissions();

  const bottom = Platform.select({
    android: TABBAR_HEIGHT / 2,
    ios: TABBAR_HEIGHT / 2 + insets.bottom - 4,
  });

  const imagePickerOption: ImagePickerOptions = {
    mediaTypes: MediaTypeOptions.Images,
    quality: 1,
  };

  const onPickImage = (res: ImagePickerResult) => {
    if (res.canceled) {
      return;
    }
    navigation.push('Upload', { image: res });
  };

  const onLaunchCamera = async () => {
    try {
      await requestPermission();
      if (status?.status !== 'granted') {
        Alert.alert('카메라 권한이 필요합니다.');
      }
      const res = await launchCameraAsync(imagePickerOption);
      console.log(res);
      onPickImage(res);
    } catch (e) {
      console.error(e);
    }
  };

  const onLaunchImageLibrary = async () => {
    try {
      const res = await launchImageLibraryAsync(imagePickerOption);
      onPickImage(res);
    } catch (e) {
      console.error(e);
    }
  };

  const onPress = () => {
    if (Platform.OS === 'android') {
      setModalVisible(true);
      return;
    }

    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['카메라로 촬영하기', '사진 선택하기', '취소'],
        cancelButtonIndex: 2,
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          onLaunchCamera();
        } else if (buttonIndex === 1) {
          onLaunchImageLibrary();
        }
      }
    );
  };

  return (
    <>
      <View style={[styles.wrapper, { bottom }]}>
        <Pressable
          android_ripple={{ color: '#ffffff' }}
          style={styles.circle}
          onPress={onPress}
        >
          <Icon name='camera-alt' color='white' size={24} />
        </Pressable>
      </View>
      <UploadModeModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onLaunchCamera={onLaunchCamera}
        onLaunchImageLibrary={onLaunchImageLibrary}
      />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 5,
    borderRadius: 27,
    width: 54,
    height: 54,
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -27 }],
    ...Platform.select({
      ios: {
        shadowColor: '#4d4d4d',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
        overflow: 'hidden',
      },
    }),
  },
  circle: {
    backgroundColor: '#6200ee',
    borderRadius: 27,
    width: 54,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
