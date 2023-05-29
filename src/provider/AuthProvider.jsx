/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext=createContext();
const auth=getAuth(app);

const googleAuthProvider=new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user ,setUser]=useState(null);
    const [loading, setLoading]=useState(true);

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email,password)
    }


    const login=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginWithGoogle=()=>{
        return signInWithPopup(auth, googleAuthProvider);
    }

    const logout=()=>{
        return signOut(auth);
    }
    useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, currentUser=>{
           
            console.log('current user',currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            return unsubscribe();
        }
    },[])

    const authInfo={
        
        user,
        loading,
        createUser,
        login,
        loginWithGoogle,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
// export default AuthContext;
export default AuthProvider;