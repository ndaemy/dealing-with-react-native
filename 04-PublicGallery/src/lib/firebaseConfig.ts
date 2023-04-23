import { FirebaseOptions, initializeApp } from 'firebase/app';

const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyDNfyHwPab_SF7Qc7T1yaa0pcIctFoip6U',
  authDomain: 'public-gallery-c51ec.firebaseapp.com',
  projectId: 'public-gallery-c51ec',
  storageBucket: 'public-gallery-c51ec.appspot.com',
  messagingSenderId: '1016820005919',
  appId: '1:1016820005919:web:89acb72816eff47985292a',
};

export const app = initializeApp(firebaseConfig);
