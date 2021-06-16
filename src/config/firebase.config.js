import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyAh1OwjYkpVLBw3-s3NO4UyML91BTWA2dQ",
  authDomain: "student-store-dba7c.firebaseapp.com",
  projectId: "student-store-dba7c",
  storageBucket: "student-store-dba7c.appspot.com",
  messagingSenderId: "754671843081",
  appId: "1:754671843081:web:c9b28b5eba77fd4798c5d8"
};
// Initialize Firebase
const fire=firebase.initializeApp(firebaseConfig);
  export default fire