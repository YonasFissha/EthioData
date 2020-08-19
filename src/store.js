import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { createStore, combineReducers, compose } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore";

const fbConfig = {
  apiKey: "AIzaSyDx_KAduGFSdCh-d3NxQp9TM4K4-6hFYQ4",
  authDomain: "ethdata-e315e.firebaseapp.com",
  databaseURL: "https://ethdata-e315e.firebaseio.com",
  projectId: "ethdata-e315e",
  storageBucket: "ethdata-e315e.appspot.com",
  messagingSenderId: "409931738291",
  appId: "1:409931738291:web:038330fdb56ef8a17014c6",
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

firebase.initializeApp(fbConfig);
firebase.firestore();

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

const initialState = {};
export const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};
