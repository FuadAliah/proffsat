import {
  collection,
  doc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  addDoc,
  orderBy,
  query,
  where,
  limit,
  startAfter,
  QueryConstraint,
} from "firebase/firestore";
import { firestore } from "@/firebaseConfig";
import { FilterType } from "@/@interfaces/filteredAPI";

export const getDocuments = async (
  collectionName: string,
  order: string = "createdAt",
  filter?: FilterType,
  pageStart?: any, // Optional parameter for pagination
  pageSize: number = 10 // Number of documents to fetch per page
) => {
  try {
    const colRef = collection(firestore, collectionName);
    const constraints: QueryConstraint[] = [orderBy(order, "desc"), limit(pageSize)];

    if (filter) {
      constraints.unshift(where(filter?.field, filter?.operator, filter?.value));
    }

    if (pageStart) {
      constraints.push(startAfter(pageStart));
    }

    const qy = query(colRef, ...constraints);
    const snapshot = await getDocs(qy);

    if (snapshot.empty) {
      return { documents: [], lastVisible: null };
    }

    const documents = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    const lastVisible = snapshot.docs[snapshot.docs.length - 1]; // Get the last document for pagination

    return { documents, lastVisible }; // Return documents and the last visible document for the next page
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

export const addDocument = async (collectionName: string, documentData: any) => {
  try {
    const colRef = collection(firestore, collectionName);
    const docRef = await addDoc(colRef, documentData);
    return { id: docRef.id };
  } catch (error) {
    throw new Error(`Error creating document: ${error}`);
  }
};

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
