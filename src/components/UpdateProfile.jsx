import React, { useRef, useState } from 'react'
import Form from './Form'
import FormTextInput from './FormTextInput'
import FormSubmitBtn from './FormSubmitBtn'
import FormInlineLink from './FormInlineLink'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const UpdateProfile = () => {

    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser } = useAuth()
    const [formError, setFormError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [showConfirmBox, setShowConfirmBox] = useState(false)


    async function handleSubmit(e) {
        e.preventDefault()

        //check confirm password
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setFormError('Passwords do not match.')
        }

        setLoading(true)

        try {
            navigate('/')
        } catch {
            return setFormError('Account registration failed!')

        }

        setLoading(false)
    }

    function handleChange(e) {
        if (passwordRef.current.value.length > 0) {
            setShowConfirmBox(true)
        } else {
            setShowConfirmBox(false)
        }
    }

    return (
        <div>
            <Form onSubmit={handleSubmit} formTitle="Edit Profile" formError={formError} method="">

                <FormTextInput inputName="name" inputType="text" labelText="name" inputRef={nameRef} defaultValue={currentUser.displayName} />
                <FormTextInput inputName="email" inputType="email" labelText="email" inputRef={emailRef} defaultValue={currentUser.email} />
                <FormTextInput inputName="password" inputType="password" labelText="New Password" inputRef={passwordRef} onChange={handleChange} placeholder="Optional" />
                {showConfirmBox && <FormTextInput inputName="password_confirm" inputType="password" labelText="Confirm New Password" inputRef={passwordConfirmRef} placeholder="" />}



                <div className="pt-1 text-center">
                    <FormSubmitBtn disabled={loading} buttonText="Confirm changes" hrefLocation="#" />
                    <FormInlineLink hrefLocation='/dashboard' linkText='Go back' />
                </div>

            </Form>
        </div>
    )
}

export default UpdateProfile
