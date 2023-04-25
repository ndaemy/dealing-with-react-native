import {
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from 'firebase/firestore';

import { User } from '~/contexts/UserContext';
import { app } from './firebaseConfig';

type UserData = Omit<User, 'id'>;

const db = getFirestore(app);

const usersRef = collection(db, 'users');

type CreateUserParams = {
  id: string;
  displayName: string;
  photoUrl: string | null;
};

export const createUser = ({ id, displayName, photoUrl }: CreateUserParams) => {
  return setDoc(doc(usersRef, id), {
    displayName,
    photoUrl,
  });
};

export const getUser = async (id: string) => {
  const user = await getDoc(doc(usersRef, id));
  return user.data() as UserData | undefined;
};
