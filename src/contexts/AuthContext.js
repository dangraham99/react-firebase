import React, { useContext, useState, useEffect } from 'react'
import app from '../firebase'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";



const AuthContext = React.createContext()

//Wrapper + helper func
export function useAuth() {
    return useContext(AuthContext)
}





export function AuthProvider({ children }) {
    //set up state for current user value to pass as prop
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    //login with firebase basic auth
    function login(email, password) {
        const auth = getAuth()
        return signInWithEmailAndPassword(auth, email, password)
    }

    //register user with firebase  basic auth
    function register(email, password) {
        const auth = getAuth()
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //logout the current firebase user
    function logout() {
        const auth = getAuth()
        return auth.signOut()
    }

    useEffect(() => {
        //watch for changes to auth and update state 
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('user')
                console.log(user)
                setCurrentUser(user)
            } else {
                setCurrentUser(null)
                console.log('no user')
            }
            setLoading(false)
        })



    }, [])

    //render out vars/funcs into value variable to be passed into the context
    const value = {
        currentUser,
        register,
        login,
        logout,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
