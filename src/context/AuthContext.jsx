import React, {createContext, useContext, useEffect, useState} from 'react';
import {auth, googleProvider} from '../firebase/firebase.config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile,
} from 'firebase/auth';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({children}) {
  const [user, setUser] = useState (null);
  const [loading, setLoading] = useState (true);

  function register({name, email, password, photoURL}) {
    return createUserWithEmailAndPassword (auth, email, password).then (res =>
      updateProfile (res.user, {displayName: name, photoURL})
    );
  }

  function login (email, password) {
    return signInWithEmailAndPassword (auth, email, password);
  }

  function googleLogin () {
    return signInWithPopup (auth, googleProvider);
  }

  function logout () {
    return signOut (auth);
  }

  function resetPassword (email) {
    return sendPasswordResetEmail (auth, email);
  }

  function updateUserProfile (profile) {
    if (!auth.currentUser) return Promise.reject ('No user');
    return updateProfile (auth.currentUser, profile).then (() => {
      setUser ({...auth.currentUser});
    });
  }

  useEffect (() => {
    const unsub = onAuthStateChanged (auth, current => {
      setUser (current);
      setLoading (false);
    });
    return () => unsub ();
  }, []);

  const value = {
    user,
    loading,
    register,
    login,
    googleLogin,
    logout,
    resetPassword,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
