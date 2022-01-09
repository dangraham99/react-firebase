import React, { useContext, useState, useEffect } from 'react'
import app from '../firebase'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, updatePassword, updateEmail } from "firebase/auth";



const AuthContext = React.createContext()
const auth = getAuth()

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

        return signInWithEmailAndPassword(auth, email, password)
    }

    function loginWithGoogle() {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)

    }

    function resetPassword(email) {

        return sendPasswordResetEmail(auth, email)
    }

    function updateUserEmail(newEmail) {

        return updateEmail(currentUser, newEmail)
    }

    function updateUserPassword(newPassword) {

        return updatePassword(currentUser, newPassword)
    }

    //register user with firebase  basic auth
    function register(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //logout the current firebase user
    function logout() {
        const auth = getAuth()
        return auth.signOut()
    }

    function parseFirebaseError(apiError) {
        let readableError = apiError
        readableError.message = "An unknown error occured, please try again."

        if (apiError.code === "auth/user-not-found") {
            readableError.message = "An account associated with these credentials could not be found."
        }

        if (apiError.code === "auth/wrong-password") {
            readableError.message = "This password is incorrect."
        }

        if (apiError.code === "auth/email-already-exists") {
            readableError.message = "There is already an account associated with these credentials."
        }

        if (apiError.code === "auth/id-token-expired" || apiError.code === "auth/id-token-revoked" || apiError.code === "auth/session-cookie-expired" || apiError.code === "auth/session-cookie-revoked") {
            readableError.message = "Your login session has expired, please reauthenticate."
        }

        if (apiError.code === "auth/invalid-display-name") {
            readableError.message = "This display name is not valid, please enter a different one."
        }

        if (apiError.code === "auth/invalid-email") {
            readableError.message = "This email address is not valid, please enter a valid email address."
        }

        if (apiError.code === "auth/weak-password") {
            readableError.message = "Your chosen password is too weak, please use a password that is at least six characters long."
        }

        if (apiError.code === "auth/too-many-requests") {
            readableError.message = "Access to this account has been temporarily suspended due to too many failed login attempts. You can restore immediate access by resetting your password."
        }

        return readableError

    }

    useEffect(() => {
        //watch for changes to auth and update state 
        const auth = getAuth()
        let unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setCurrentUser(user)
            } else {
                setCurrentUser(null)
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
        parseFirebaseError,
        logout,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
