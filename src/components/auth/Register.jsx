import React, { useRef, useState } from 'react'
import Form from '../partials/Form'
import FormTextInput from '../partials/FormTextInput'
import FormSubmitBtn from '../partials/FormSubmitBtn'
import FormInlineLink from '../partials/FormInlineLink'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { register, parseFirebaseError } = useAuth()
    const [formError, setFormError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    async function handleSubmit(e) {
        e.preventDefault()

        //check confirm password
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setFormError('Passwords do not match.')
        }

        setLoading(true)

        try {
            await register(emailRef.current.value, passwordRef.current.value).then((result) => {
                navigate('/')
            }).catch((error) => {

                const readableError = parseFirebaseError(error)
                setFormError(readableError.message)
            })
        } catch {

        }

        setLoading(false)
    }

    return (
        <div>
            <Form onSubmit={handleSubmit} formTitle="Let's get started" formError={formError} method="">

                <FormTextInput name="name" type="text" labelText="name" ref={nameRef} required />
                <FormTextInput name="email" type="email" labelText="email" ref={emailRef} required />
                <FormTextInput name="password" type="password" labelText="Password" ref={passwordRef} required />
                <FormTextInput name="password_confirm" type="password" labelText="Confirm Password" ref={passwordConfirmRef} required />



                <div className="pt-1 text-center">
                    <FormSubmitBtn disabled={loading} buttonText="Create account" to="#" />
                    <FormInlineLink inlineText="Already have an account? " linkText="Sign in." to='/login' />
                </div>

            </Form>
        </div>
    )
}

export default Register
