import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD0mnXTVgo4MqAUk7T2DxL9V0cf8v-z6Wg",
  authDomain: "dementia-mitra.firebaseapp.com",
  projectId: "dementia-mitra",
  storageBucket: "dementia-mitra.appspot.com",
  messagingSenderId: "180409009294",
  appId: "1:180409009294:web:0f0acff26ed85ed17175df",
  measurementId: "G-8MR4C5VZWR"
    // apiKey: Constants.expoConfig.extra.apiKey,
    // authDomain: Constants.expoConfig.extra.authDomain,
    // projectId: Constants.expoConfig.extra.projectId,
    // storageBucket: Constants.expoConfig.extra.storageBucket,
    // messagingSenderId: Constants.expoConfig.extra.messagingSenderId,
    // appId: Constants.expoConfig.extra.appId,
    // databaseURL: Constants.expoConfig.extra.databaseURL,
    // measurementId: Constants.expoConfig.extra.measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
  
export const database = getFirestore();