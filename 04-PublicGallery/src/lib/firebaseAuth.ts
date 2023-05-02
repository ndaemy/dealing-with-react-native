import { NextOrObserver, User } from '@firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  getReactNativePersistence,
  initializeAuth,
} from 'firebase/auth/react-native';

import { app } from './firebaseConfig';

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

type AuthParams = {
  email: string;
  password: string;
};

export const signIn = ({ email, password }: AuthParams) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signUp = ({ email, password }: AuthParams) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const subscribeAuth = (callback: NextOrObserver<User | null>) => {
  return auth.onAuthStateChanged(callback);
};

export const signOut = () => {
  return auth.signOut();
};
