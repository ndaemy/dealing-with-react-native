import { NextOrObserver, User } from '@firebase/auth';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { app } from './firebaseConfig';

const auth = getAuth(app);

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
