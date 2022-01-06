import React, {useContext, useState, useEffect} from 'react'
import app from '../firebase'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";



const AuthContext = React.createContext()

//Wrapper + helper func
export function useAuth(){
    return useContext(AuthContext)
}





export function AuthProvider({children}) {
    //set up state for current user value to pass as prop
    const [currentUser, setCurrentUser] = useState()
    
    


    //register user w/firebase using basic auth
    function register(email, password) {
        const auth = getAuth()
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        //watch for changes to auth and update state 
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        })

    }, [])


    const value = {
        currentUser,
        register
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
