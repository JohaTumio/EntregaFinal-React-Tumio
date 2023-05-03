import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAVV_1aTud-Y1M_TuvmUbBnBHM8AYRH37E",
    authDomain: "electrosale-a1321.firebaseapp.com",
    projectId: "electrosale-a1321",
    storageBucket: "electrosale-a1321.appspot.com",
    messagingSenderId: "244880684779",
    appId: "1:244880684779:web:3820c54de51ca5d51ff0ae"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
