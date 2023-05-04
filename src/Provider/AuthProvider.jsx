// import React from 'react';

import { createContext } from "react";
import { getAuth } from "firebase/auth";

import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);

// eslint-disable-next-line no-unused-vars
const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
   const user ={displayName: 'aaaa ssss'}
    const authInfo={
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;