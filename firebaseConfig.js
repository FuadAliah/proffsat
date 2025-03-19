import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { SecretManagerServiceClient } from "@google-cloud/secret-manager";

const client = new SecretManagerServiceClient();

async function accessSecret(secretName) {
  const [version] = await client.accessSecretVersion({
    name: `projects/proffsat-a1ea8/secrets/${secretName}/versions/latest`,
  });
  return version.payload.data.toString();
}

async function getFirebaseConfig() {
  return {
    apiKey: await accessSecret("NEXT_PUBLIC_FIREBASE_API_KEY"),
    authDomain: await accessSecret("NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN"),
    projectId: await accessSecret("NEXT_PUBLIC_FIREBASE_PROJECT_ID"),
    storageBucket: await accessSecret("NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET"),
    messagingSenderId: await accessSecret("NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID"),
    appId: await accessSecret("NEXT_PUBLIC_FIREBASE_APP_ID"),
    measurementId: await accessSecret("NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID"),
  };
}

async function initializeFirebase() {
  const firebaseConfig = await getFirebaseConfig();

  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const auth = getAuth(app);
  const firestore = getFirestore(app);
  const storage = getStorage(app);

  return { app, auth, firestore, storage };
}

export default initializeFirebase;
