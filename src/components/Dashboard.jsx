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
                <div className="space-y-1 mb-4">
                    <p><span className='font-semibold'>Email:</span> {currentUser.email}</p>
                    {currentUser.displayName && <p><span className='font-semibold'>Name:</span> {currentUser.displayName}</p>}
                </div>
                <div className="space-y-3 pt-5">
                    <button className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded cursor-pointer border-neutral-600 border-1 hover:bg-blue-600'>Edit profile</button>
                </div>
            </div>
        </Content>


    )
}

export default Dashboard