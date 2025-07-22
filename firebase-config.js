
// Firebase configuration and initialization
const firebaseConfig = {
  apiKey: "AIzaSyDvX43zsYZeugO_k0PEEAiWk0v4_0W8jiM",
  authDomain: "orex-power-systems.firebaseapp.com",
  databaseURL: "https://orex-power-systems-default-rtdb.firebaseio.com",
  projectId: "orex-power-systems",
  storageBucket: "orex-power-systems.firebasestorage.app",
  messagingSenderId: "245896129461",
  appId: "1:245896129461:web:9b77c2c90ffe043e9607fc",
  measurementId: "G-SGHQ10EPE8"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
