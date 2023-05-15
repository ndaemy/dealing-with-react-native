import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { app } from '~/lib/firebaseConfig';
import { User } from '~/lib/users';

const db = getFirestore(app);

const postsRef = collection(db, 'posts');

type CreatePostParams = {
  user: User;
  photoURL: string;
  description: string;
};

export const createPost = ({
  user,
  photoURL,
  description,
}: CreatePostParams) => {
  return addDoc(postsRef, {
    user,
    photoURL,
    description,
  });
};
