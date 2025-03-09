import axios from "axios";

const firestoreUrl = process.env.NEXT_PUBLIC_FIRESTORE_URL;

export const getDocuments = async (collectionName: string) => {
  try {
    const response = await axios.get(`${firestoreUrl}/${collectionName}`);
    return response.data.documents.map((document: any) => {
      return {
        id: document.name.split("/").pop(),
        ...document.fields,
      };
    });
  } catch (error) {
    console.error("Error getting documents:", error);
    throw error;
  }
};

export const addDocument = async (collectionName: string, documentData: string) => {
  try {
    const response = await axios.post(`${firestoreUrl}/${collectionName}`, {
      fields: documentData,
    });
    return response.data;
  } catch (error) {
    console.error("Error adding document:", error);
    throw error;
  }
};

export const getDocument = async (collectionName: string, documentId: string) => {
  try {
    const response = await axios.get(`${firestoreUrl}/${collectionName}/${documentId}`);
    return {
      id: response.data.name.split("/").pop(),
      ...response.data.fields,
    };
  } catch (error) {
    console.error("Error getting document:", error);
    throw error;
  }
};

export const updateDocument = async (
  collectionName: string,
  documentId: string,
  documentData: string
) => {
  try {
    const response = await axios.patch(`${firestoreUrl}/${collectionName}/${documentId}`, {
      fields: documentData,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating document:", error);
    throw error;
  }
};

export const deleteDocument = async (collectionName: string, documentId: string) => {
  try {
    const response = await axios.delete(`${firestoreUrl}/${collectionName}/${documentId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting document:", error);
    throw error;
  }
};
