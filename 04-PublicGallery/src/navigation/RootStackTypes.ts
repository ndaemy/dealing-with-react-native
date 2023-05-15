import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ImagePickerResult } from 'expo-image-picker';

export type RootStackParamList = {
  MainTab: undefined;
  Upload: {
    image: ImagePickerResult;
  };
  SignIn?: {
    isSignUp?: boolean;
  };
  Welcome: {
    uid: string;
  };
};

export type RootStackNavigationProps<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;

export type RootStackRouteProps<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
