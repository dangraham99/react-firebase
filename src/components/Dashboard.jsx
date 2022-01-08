import { updateCurrentUser } from 'firebase/auth'
import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import Content from './Content'

function Dashboard() {

    const [error, setError] = useState()
    const { currentUser } = useAuth()

    function handleLogout() {

    }

    return (



        <Content pageTitle="Dashboard">
            <div className="max-w-md px-8 pt-6 pb-8 my-8 text-gray-700 bg-white rounded-md shadow-md">
                <h1 className="pb-4 mx-auto text-2xl font-bold">Profile</h1>
                <div className="mb-4 space-y-1">
                    {currentUser.photoURL && <img src={currentUser.photoURL} className="my-2 border-2 border-gray-200 rounded-full" />}
                    {currentUser.displayName && <p><span className='font-semibold'>Name:</span> {currentUser.displayName}</p>}
                    <p><span className='font-semibold'>Email:</span> {currentUser.email}</p>

                </div>
                <div className="pt-5 space-y-3">
                    <Link to="/update-profile" className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded cursor-pointer border-neutral-600 border-1 hover:bg-blue-600'>Edit profile</Link>
                </div>
            </div>
        </Content>


    )
}

export default Dashboard
