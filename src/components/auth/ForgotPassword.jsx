import React, { useRef, useState } from 'react'
import FormTextInput from '../partials/FormTextInput'
import Form from '../partials/Form'
import FormSubmitBtn from '../partials/FormSubmitBtn'
import { navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

function ForgotPassword() {

    const emailRef = useRef('')
    const { resetPassword } = useAuth()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [message, setMessage] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        const email = emailRef.current.value
        setError('')
        setMessage('')
        setLoading(true)


        try {
            await resetPassword(email)
            setMessage('An email containing a password reset link has been sent to ' + email)

        } catch {
            setError("An error occured sending the email")
        }

        setLoading(false)
    }


    return (
        <Form formError={error} formMessage={message} formTitle="Reset password" onSubmit={handleSubmit}>
            <FormTextInput
                name="email"
                type="email"
                labelText="Email"
                ref={emailRef}

            />

            <FormSubmitBtn buttonText="Send reset link" disabled={loading} />
        </Form>
    )
}

export default ForgotPassword
