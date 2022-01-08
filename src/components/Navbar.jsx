import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Navbar = () => {

    const { currentUser, logout, loading } = useAuth()
    const navigate = useNavigate

    async function handleLogout() {

        try {
            await logout()
            navigate('/login')
        } catch {
            console.log('User requested logout failed')
        }

    }

    return (
        <div>
            <nav className="py-4 font-semibold backdrop-blur-lg border-b-1 shadow-md bg-white border-neutral-300">
                <div className="px-12 mx-auto xl:max-w-5xl xl:px-0">
                    <div className="flex items-center justify-between ">
                        <div className="flex space-x-12">
                            <Link to="/" className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                                </svg>
                                <span>React-Firebase</span>
                            </Link>
                        </div>
                        <div className="flex items-center justify-between space-x-6">
                            {(currentUser && !loading) && <>

                                <p className="font-semibold text-sm">{currentUser.email}</p>
                                <button className='text-sm text-blue-500 underline' onClick={handleLogout}>Sign out</button>

                            </>}

                            {(!currentUser && !loading) && <> <Link to="/login">Sign in</Link>
                                <Link to="/register" className='flex px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'>
                                    <span className="mr-1">Sign up</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </>}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
