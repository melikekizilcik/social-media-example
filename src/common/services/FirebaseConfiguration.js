import { initializeApp } from "firebase/app";

//firestore db
import { getFirestore, collection, addDoc } from "firebase/firestore";

//firebase authentication
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendEmailVerification,
  updatePassword,
  onAuthStateChanged,
} from "firebase/auth";
import {
  login as loginHandle,
  logout as logoutHandle,
} from "../store/reducers/auth";

//import packages
import toast from "react-hot-toast";
import store from "../store/store";

const firebaseConfig = {
  apiKey: "AIzaSyCBqFeByTvzAXZihSuNWGjuVXgxupc3Xq8",
  authDomain: "social-media-website-9a52d.firebaseapp.com",
  projectId: "social-media-website-9a52d",
  storageBucket: "social-media-website-9a52d.appspot.com",
  messagingSenderId: "179683471192",
  appId: "1:179683471192:web:9291ca7991e05ceed2bf2d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

//auth actions
//register
export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

//login
export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

//logout
export const logout = async () => {
  try {
    await signOut(true);
  } catch (error) {
    toast.error(error.message);
  }
};

//update profile
export const update = async (data) => {
  try {
    await updateProfile(auth.currentUser, data);
    toast.success("Profile updated");
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};

//verification
export const emailVerification = async () => {
  try {
    await sendEmailVerification(auth.currentUser);
    toast.success(
      `Verification mail has been sent to ${auth.currentUser.email}`
    );
  } catch (error) {
    toast.error(error.message);
  }
};

//update password
export const resetPassword = async (password) => {
  try {
    await updatePassword(auth.currentUser, password);
    toast.success("password updated");
  } catch (error) {
    toast.error(error.message);
  }
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(
      loginHandle({
        displayName: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
        photoURL: user.photoURL,
        uid: user.uid,
      })
    );
  } else {
    store.dispatch(logoutHandle(user));
  }
});

//add user
export const addUser = async (data) => {
  const result = await addDoc(collection(db, "users"), data);
  console.log(result);
};
