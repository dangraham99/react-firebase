import React, { useRef, useState } from 'react'
import Form from '../partials/Form'
import FormSubmitBtn from '../partials/FormSubmitBtn'
import FormTextInput from '../partials/FormTextInput'
import FormInlineLink from '../partials/FormInlineLink'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, loginWithGoogle } = useAuth()
    const [formError, setFormError] = useState('')
    const [loading, setLoading] = useState(false)

    function handleNotImplemented() {
        return alert("This feature is not implemented")
    }


    async function handleSubmit(e) {
        e.preventDefault()

        setLoading(true)

        try {
            await login(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        } catch {

            setFormError('Account login failed!')

        }

        setLoading(false)
    }


    async function handleGoogleSignIn() {


        setLoading(true)

        try {
            await loginWithGoogle()
            navigate('/')
        } catch {

            setFormError('Account login with Google failed!')

        }

        setLoading(false)
    }


    return (
        <div>



            <Form formError={formError} formTitle="Welcome back" onSubmit={handleSubmit}>
                <div className="mb-4 form-body">
                    <FormTextInput
                        name="email"
                        type="email"
                        labelText="Email"
                        ref={emailRef}
                        required

                    />
                    <FormTextInput
                        name="password"
                        type="password"
                        labelText="Password"
                        ref={passwordRef}
                        required
                    />

                    <FormInlineLink
                        inlineText="Forgotten your password? "
                        linkText="Click here."
                        to='/forgot-password'

                    />

                    <FormSubmitBtn
                        buttonText="Sign in"
                        disabled={loading}

                    />



                    <div className="flex justify-center mx-5 my-3 space-x-6">

                        <a className="flex items-center p-2 text-white bg-black rounded-md cursor-pointer hover:bg-gray-900" onClick={handleNotImplemented}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="-2.258175 -4.620225 19.57085 27.72135">
                                <path fill="#fff" d="M7.6445 5.31c-.73 0-1.86-.83-3.05-.8-1.57.02-3.01.91-3.82 2.32-1.63 2.83-.42 7.01 1.17 9.31.78 1.12 1.7 2.38 2.92 2.34 1.17-.05 1.61-.76 3.03-.76 1.41 0 1.81.76 3.05.73 1.26-.02 2.06-1.14 2.83-2.27.89-1.3 1.26-2.56 1.28-2.63-.03-.01-2.45-.94-2.48-3.74-.02-2.34 1.91-3.46 2-3.51-1.1-1.61-2.79-1.79-3.38-1.83-1.54-.12-2.83.84-3.55.84zm2.6-2.36c.65-.78 1.08-1.87.96-2.95-.93.04-2.05.62-2.72 1.4-.6.69-1.12 1.8-.98 2.86 1.03.08 2.09-.53 2.74-1.31" />
                            </svg>
                        </a>
                        <a onClick={handleGoogleSignIn} className="flex items-center p-2 border rounded-md cursor-pointer border-neutral-300 hover:bg-gray-300 border-neutral">
                            <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                                    <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                                    <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                                    <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                                    <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
                                </g>
                            </svg>
                        </a>
                        <a className="flex items-center p-1 text-white bg-blue-600 rounded-md hover:bg-blue-800" onClick={handleNotImplemented}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="36" width="36" viewBox="-204.79995 -341.33325 1774.9329 2047.9995">
                                <path d="M1365.333 682.667C1365.333 305.64 1059.693 0 682.667 0 305.64 0 0 305.64 0 682.667c0 340.738 249.641 623.16 576 674.373V880H402.667V682.667H576v-150.4c0-171.094 101.917-265.6 257.853-265.6 74.69 0 152.814 13.333 152.814 13.333v168h-86.083c-84.804 0-111.25 52.623-111.25 106.61v128.057h189.333L948.4 880H789.333v477.04c326.359-51.213 576-333.635 576-674.373" fill="#1877f2" /><path d="M948.4 880l30.267-197.333H789.333V554.609C789.333 500.623 815.78 448 900.584 448h86.083V280s-78.124-13.333-152.814-13.333c-155.936 0-257.853 94.506-257.853 265.6v150.4H402.667V880H576v477.04a687.805 687.805 0 00106.667 8.293c36.288 0 71.91-2.84 106.666-8.293V880H948.4" fill="#fff" />
                            </svg>
                        </a>
                    </div>

                </div>

                <div className="text-center">
                    <FormInlineLink
                        inlineText="Don't have an account? "
                        linkText="Sign up."
                        to="/register"

                    />
                </div>

            </Form >
        </div >
    )
}

export default Login
