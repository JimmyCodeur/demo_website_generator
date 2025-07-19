import { db } from './firebaseConfig';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

export const addData = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document écrit avec ID :", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Erreur lors de l'ajout des données :", error.message);
    throw error;
  }
};

export const getData = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error.message);
    throw error;
  }
};

export const updateData = async (collectionName, docId, newData) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, newData);
    console.log("Document mis à jour avec succès !");
  } catch (error) {
    console.error("Erreur lors de la mise à jour :", error.message);
    throw error;
  }
};

export const deleteData = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
    console.log("Document supprimé avec succès !");
  } catch (error) {
    console.error("Erreur lors de la suppression :", error.message);
    throw error;
  }
};
