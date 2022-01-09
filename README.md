# React-Firebase

## Introduction

A basic implementation of [Google Firebase Authentication](https://firebase.google.com/docs/auth) in React using Tailwind CSS. This mini app represents my intial experimentation with React and Tailwind and is **not intended for further use** other than as a demo of Firebase integration with React. Where used, users should be aware that **appropriate Firebase Security Rules should be enabled by the user.**

## Setup

Requirements:

- [Node.js](https://nodejs.org/en/)
- [Firebase Project](https://firebase.google.com/)

### Node:


`npm install`

This will install the prerequisite packages required for the app.


`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

### Firebase:

The app requires to be linked to a Firebase project which the user will need to create from the Firebase console. Ensure that the correct authentication providers are enabled if intending to use 3rd party authentication. The only 3rd party provider enabled in this demo is Google. 

When creating the project, you may replace the `firebase.js` file with the one generated on the Firebase console to link the app to your Firebase backend: 

```js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: YOURKEY,
  authDomain: YOURKEY,
  projectId: YOURKEY,
  storageBucket: YOURKEY,
  messagingSenderId: YOURKEY,
  appId: YOURKEY,
  measurementId: YOURKEY
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


```

Or alternatively, you can make use of the environment variables in the current `firebase.js` file by placing them into a .env file in the /src folder. [However, users should be aware that storing **any** confidential keys whether in env variables or source is not secure.](https://stackoverflow.com/a/57103663)




