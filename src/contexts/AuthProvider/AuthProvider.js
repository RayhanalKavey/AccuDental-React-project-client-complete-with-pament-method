import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
//============
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //sign Up
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //SignIn With email and password
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //update user profile (updateProfile)
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  //Google sign in
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //On auth state change  //Observe user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Inside auth state change", currentUser);
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  //Sign-out
  const logout = () => {
    //clear local storage when logout
    localStorage.removeItem("genius-token");
    return signOut(auth);
  };
  const authInfo = {
    user,
    setUser,
    createUser,
    logIn,
    updateUserProfile,
    googleLogin,
    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
