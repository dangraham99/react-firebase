import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import FadeLoader from "react-spinners/ClipLoader";

function Private({ children }) {

    const { currentUser, loading } = useAuth()

    if (loading) return <FadeLoader loading={loading} />

    return (
        <div>

            {
                currentUser ?
                    <>{children}</>
                    :
                    <Navigate to="/login" />
            }

        </div>
    )
}

export default Private
