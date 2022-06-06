import { initializeApp } from "firebase/app";
import {getDatabase, ref} from "firebase/database"
import { getAuth } from "firebase/auth";
import {firebaseConfig} from "./config";

import { GoogleAuthProvider } from "firebase/auth";

const app = initializeApp(firebaseConfig);
console.log(app);
const dataBase = getDatabase(app)
const databaseRef = ref(dataBase);
console.log(databaseRef);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);