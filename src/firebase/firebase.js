/** firebase.js: The file where all the configuration goes that you
 *  have seen previously on your Firebase dashboard. In addition, Firebase itself will be instantiated in this file.
 */

import firebase from 'firebase/app'

const config = {
    apiKey: "AIzaSyCTPbL9CboXx3bC_QqG_XxXBF0eatwfBeY",
    authDomain: "reactfire-198405.firebaseapp.com",
    databaseURL: "https://reactfire-198405.firebaseio.com",
    projectId: "reactfire-198405",
    storageBucket: "reactfire-198405.appspot.com",
    messagingSenderId: "538077058493"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config)
}
