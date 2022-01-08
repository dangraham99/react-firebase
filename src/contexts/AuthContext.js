import React, { useContext, useState, useEffect } from 'react'
import app from '../firebase'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, updatePassword, updateEmail } from "firebase/auth";



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

    function loginWithGoogle() {
        const provider = new GoogleAuthProvider()
        const auth = getAuth()
        return signInWithPopup(auth, provider)
            .then((result) => {
                //get access token from result
                const credential = GoogleAuthProvider.credentialFromResult(result)
                const token = credential.accessToken
                const user = result.user
            }).catch((error) => {
                //error data TODO: add error logic
                const errorCode = error.code
                const email = error.email
                const credential = GoogleAuthProvider.credentialFromError(error)
            })
    }

    function resetPassword(email) {
        const auth = getAuth()
        return sendPasswordResetEmail(auth, email)
    }

    function updateUserEmail(newEmail){
        const auth = getAuth()
        return updateEmail(currentUser, newEmail)
    }

    function updateUserPassword(newPassword){
        const auth = getAuth()
        return updatePassword(currentUser, newPassword)
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
        let unsubscribe = onAuthStateChanged(auth, (user) => {
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

    //expose out vars/funcs into value variable to be passed into the context
    const value = {
        currentUser,
        register,
        login,
        loginWithGoogle,
        resetPassword,
        updateUserEmail,
        updateUserPassword,
        logout,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
