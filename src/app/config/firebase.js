import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBih0pZAJ1r4x5TXZxKVR00y8wbBRqkWE0",
    authDomain: "dcontrolcrm.firebaseapp.com",
    projectId: "dcontrolcrm",
    storageBucket: "dcontrolcrm.appspot.com",
    messagingSenderId: "238131030634",
    appId: "1:238131030634:web:52373d63cb68cb3037f813"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  //export default app = initializeApp(firebaseConfig);

 