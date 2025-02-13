// firebase.config.js
const firebaseConfig = {
    apiKey: "AIzaSyDJlI-BDZYd2M-7zgMMfsySFRAcdk9Whr4",
    authDomain: "rammaphat-30736.firebaseapp.com",
    projectId: "rammaphat-30736",
    storageBucket: "rammaphat-30736.firebasestorage.app",
    messagingSenderId: "54163711411",
    appId: "1:54163711411:web:5dba429d5bd27a0c1897c6",
    measurementId: "G-WY87QXDNK0"
};

// For service worker (firebase-messaging-sw.js)
// This ensures the config is available in both module and non-module contexts
if (typeof self !== 'undefined') {
    self.firebaseConfig = firebaseConfig;
}