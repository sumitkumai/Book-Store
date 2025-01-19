import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext();
export default function AuthProvider({children}){
    const intitialAuthUser = localStorage.getItem("User");
    const [authUser, setAuthUser] = useState(intitialAuthUser?JSON.parse(intitialAuthUser):null);

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=> useContext(AuthContext);