import firebase from "firebase/app"

const config = {
    apiKey: "AIzaSyAd5KWYbEQqgKkmsEsWbvqmhgm0aO5Eb5g",
    authDomain: "aizero-training.firebaseapp.com",
    databaseURL: "https://aizero-training.firebaseio.com",
    projectId: "aizero-training",
    storageBucket: "aizero-training.appspot.com",
    messagingSenderId: "173943450195",
    appId: "1:173943450195:web:e4d63529594c2fa7f0b4a6",
    measurementId: "G-B4VL4LL139"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'

export const Firebase = firebase
export const Firestore = firebase.firestore();
export const Auth = firebase.auth()
export const Storage = firebase.storage()
export function Timestamp() { return firebase.firestore.Timestamp.now() }