import firebase from 'firebase'

const firebaseConfig = {
      apiKey: "AIzaSyA8nNNmVjtG40oIjkuGK-x8A5rigoLYykQ",
      authDomain: "fir-4deed.firebaseapp.com",
      projectId: "fir-4deed",
      storageBucket: "fir-4deed.appspot.com",
      messagingSenderId: "1078863002962",
      appId: "1:1078863002962:web:3dd680b9f118e94c008e8b",
      measurementId: "G-CD8GWD20LS"
    };


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

const auth = firebase.auth()

const provider =new firebase.auth.GoogleAuthProvider()


export {db, auth, provider}

