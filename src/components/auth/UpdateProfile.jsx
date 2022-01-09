import React, { useRef, useState, useEffect } from 'react'
import Form from '../partials/Form'
import FormTextInput from '../partials/FormTextInput'
import FormSubmitBtn from '../partials/FormSubmitBtn'
import FormInlineLink from '../partials/FormInlineLink'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const UpdateProfile = () => {

    /* currently name is not supported, for non-3rd party accounts this would 
    require storing user's name separately which is not necessary for this demo */
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updateUserEmail, updateUserPassword, parseFirebaseError } = useAuth()
    const [formError, setFormError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [showConfirmBox, setShowConfirmBox] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)

    useEffect(() => {
        currentUser.providerData.forEach((provider) => {
            /* 
            this is to stop unexpected behaviour in editing account details for users
            using 3rd party auth providers. not necessary if sufficient security rules
            are enabled in Firebase configs.
           */

            if (provider.providerId !== "password") {
                setIsDisabled(true)
                setFormError("You have logged in using a third-party provider " + "(" + provider.providerId + ")" + ". Some profile editing features are disabled.")
                return
            }
        })


    }, [])


    function handleSubmit(e) {
        e.preventDefault()
        setFormError()
        setLoading(true)

        //What promises are to be executed when the submit button is pushed
        const promises = []
        if (emailRef.current.value !== currentUser.email && !isDisabled) {
            promises.push(updateUserEmail(emailRef.current.value))
        }

        if (passwordRef.current.value) {
            //check confirm password
            if (passwordRef.current.value !== passwordConfirmRef.current.value) {
                setLoading(false)
                return setFormError('Passwords do not match.')
            }

            promises.push(updateUserPassword(passwordRef.current.value))
        }

        Promise.all(promises)
            .then(() => { navigate('/') })
            .catch((error) => {
                const readableError = parseFirebaseError(error)
                setFormError(readableError.message)
            })
            .finally(() => {
            })

        setLoading(false)


    }

    function handleChange() {
        if (passwordRef.current.value.length > 0) {
            setShowConfirmBox(true)
        } else {
            setShowConfirmBox(false)

        }
    }

    return (
        <div>
            <Form onSubmit={handleSubmit} formTitle="Edit Profile" formError={formError} method="">

                <FormTextInput disabled={isDisabled} name="name" type="text" labelText="name" ref={nameRef} defaultValue={currentUser.displayName} />
                <FormTextInput disabled={isDisabled} name="email" type="email" labelText="email" ref={emailRef} defaultValue={currentUser.email} />
                <FormTextInput name="password" type="password" labelText="New Password" ref={passwordRef} onChange={handleChange} placeholder="Optional" />
                {showConfirmBox && <FormTextInput name="password_confirm" type="password" labelText="Confirm New Password" ref={passwordConfirmRef} placeholder="" />}



                <div className="pt-1 text-center">
                    <FormSubmitBtn disabled={loading} buttonText="Confirm changes" onClick={handleSubmit} />
                    <FormInlineLink to='/' linkText='Go back' />
                </div>

            </Form>
        </div>
    )
}

export default UpdateProfile
