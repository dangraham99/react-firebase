import React, {useRef, useState} from 'react'
import Form from './Form'
import FormTextInput from './FormTextInput'
import FormSubmitBtn from './FormSubmitBtn'
import FormInlineLink from './FormInlineLink'
import { useAuth } from '../contexts/AuthContext'

const Register = () => {

    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { register } = useAuth()
    const [formError, setFormError] = useState('')
    const [loading, setLoading] = useState(false)


    async function handleSubmit(e) {
        e.preventDefault()

        //check confirm password
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setFormError('Passwords do not match.')
        }

        setLoading(true)

        try {
            await register(emailRef.current.value, passwordRef.current.value)
        } catch {
            return setFormError('Account registration failed!')
            
        }
        
        setLoading(false)
    }

    return (
        <div>
            <Form onSubmit={handleSubmit} formTitle="Let's get started" formError={formError} method="">

                <FormTextInput inputName="name" inputType="text" labelText="name" inputRef={nameRef} />
                <FormTextInput inputName="email" inputType="email" labelText="email" inputRef={emailRef} />
                <FormTextInput inputName="password" inputType="password" labelText="Password" inputRef={passwordRef} />
                <FormTextInput inputName="password_confirm" inputType="password" labelText="Confirm Password" inputRef={passwordConfirmRef} />

                

                <div className="pt-1 text-center">
                    <FormSubmitBtn disabled={loading} buttonText="Create account" hrefLocation="#" />
                    <FormInlineLink inlineText="Already have an account? " linkText="Sign in." hrefLocation='/login' />
                </div>

            </Form>
        </div>
    )
}

export default Register
