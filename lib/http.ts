import { collection, doc, getDocs, getDoc, updateDoc, deleteDoc, addDoc } from "firebase/firestore";
import { firestore } from "@/firebaseConfig";
import { LookupType } from "@/@interfaces/category";

export const getDocuments = async (collectionName: string) => {
  try {
    const colRef = collection(firestore, collectionName);
    const snapshot = await getDocs(colRef);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw new Error(`Error fetching documents: ${error}`);
  }
};

export const getDocument = async (collectionName: string, documentId: string) => {
  try {
    const docRef = doc(firestore, collectionName, documentId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      throw new Error("Document does not exist.");
    }
  } catch (error) {
    throw new Error(`Error fetching document: ${error}`);
  }
};

export const addDocument = async (collectionName: string, documentData: Omit<LookupType, "id">) => {
  try {
    const colRef = collection(firestore, collectionName);
    const docRef = await addDoc(colRef, documentData);
    return { id: docRef.id };
  } catch (error) {
    throw new Error(`Error creating document: ${error}`);
  }
};

// still not used updateDocument
export const updateDocument = async (
  collectionName: string,
  documentId: string,
  documentData: Record<string, any>
) => {
  try {
    const docRef = doc(firestore, collectionName, documentId);
    await updateDoc(docRef, documentData);
    return { id: documentId };
  } catch (error) {
    throw new Error(`Error updating document: ${error}`);
  }
};

export const deleteDocument = async (collectionName: string, documentId: string) => {
  try {
    const docRef = doc(firestore, collectionName, documentId);
    await deleteDoc(docRef);
    return { id: documentId };
  } catch (error) {
    throw new Error(`Error deleting document: ${error}`);
  }
};
