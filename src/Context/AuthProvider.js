import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("");
    const [loader, setLoader] = useState(true);

    //* Create a new user;
    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //* google signup
    const googleSignup = (provider) => {
        setLoader(true)
        return signInWithPopup(auth, provider);
    }

    //* sign in method;
    const signIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //* sign out method;
    const signOutUser = () => {
        setLoader(true);
        return signOut(auth);
    }

    //* update profile method;
    const updateUserProfile = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false);
        })
        return () => unsubscribe;
    }, [])

    const authInfo = {
        user,
        createUser,
        googleSignup,
        signIn,
        signOutUser,
        updateUserProfile,
        loader,
        setLoader
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;