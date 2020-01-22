import firebase, { database } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import { firebaseConfig } from './config';

function getFirebase() {
    try {
        firebase.initializeApp(firebaseConfig);
    } catch (e) {
        // console.error(e);
    } finally {
        return {
            db: firebase.firestore(),
            storage: firebase.storage(),
            database:firebase.database()
        }
    }
}

export default getFirebase;