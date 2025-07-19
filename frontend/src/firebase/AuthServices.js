import { auth } from "../firebase/firebaseConfig";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  sendPasswordResetEmail, 
  onAuthStateChanged 
} from "firebase/auth";
import { db } from "../firebase/firebaseConfig";
import { doc, setDoc, deleteDoc, getDoc } from "firebase/firestore";

export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const token = await user.getIdToken();

    await setDoc(doc(db, "sessions", user.email), { token });

    localStorage.setItem("sessionToken", token);

    return user;
  } catch (error) {
    console.error("Erreur lors de l'inscription :", error.code);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  console.log("📢 Tentative de connexion avec :", email);

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("✅ Connexion réussie !");
    
    const user = userCredential.user;
    const token = await user.getIdToken();
    
    console.log("🔥 Token généré :", token);

    await setDoc(doc(db, "sessions", email), { token });
    console.log("📁 Token enregistré dans Firestore pour :", email);

    localStorage.setItem("sessionToken", token);
    
    return user;
  } catch (error) {
    console.error("❌ Erreur lors de la connexion :", error);
    throw error;
  }
};


export const logoutUser = async (email) => {
  try {
    console.log("🚪 Déconnexion en cours...");

    await deleteDoc(doc(db, "sessions", email));
    console.log("🗑️ Token supprimé en Firestore");

    localStorage.removeItem("sessionToken");
    console.log("🗑️ Token supprimé de localStorage");

    await signOut(auth);
    console.log("✅ Déconnexion réussie !");
  } catch (error) {
    console.error("❌ Erreur lors de la déconnexion :", error);
    throw error;
  }
};

export const getCurrentUserToken = async (email) => {
  if (!email) {
    console.log("❌ Aucun email fourni !");
    return null;
  }

  console.log("🔎 Vérification du token pour :", email);

  const token = localStorage.getItem("sessionToken");
  if (token) {
    console.log("✅ Token trouvé dans localStorage :", token);
    return token;
  }

  const sessionDoc = await getDoc(doc(db, "sessions", email));
  if (sessionDoc.exists()) {
    console.log("✅ Token trouvé dans Firestore :", sessionDoc.data().token);
    return sessionDoc.data().token;
  } else {
    console.log("❌ Aucun token trouvé en Firestore.");
    return null;
  }
};

export const resetPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};
