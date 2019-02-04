import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyB2Y3TsBS4FTBYkzxamKnG3G43ixCrNQ0M",
    authDomain: "tasker-1111.firebaseapp.com",
    databaseURL: "https://tasker-1111.firebaseio.com",
    projectId: "tasker-1111",
    storageBucket: "tasker-1111.appspot.com",
    messagingSenderId: "663896874239"
};

const fire = firebase.initializeApp(config);

export default fire;
