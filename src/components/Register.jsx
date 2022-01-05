import React from 'react'
import Form from './Form'
import FormTextInput from './FormTextInput'
import FormSubmitBtn from './FormSubmitBtn'
import FormInlineLink from './FormInlineLink'

const Register = () => {
    return (
        <div>
            <Form formTitle="Let's get started">

                <FormTextInput inputName="email" inputType="email" labelText="email" />
                <FormTextInput inputName="password" inputType="password" labelText="Password" />
                <FormTextInput inputName="password_confirm" inputType="password_confirm" labelText="Confirm Password" />

                <FormSubmitBtn buttonText="Create account" hrefLocation="#" />

                <div className="text-center">
                    <FormInlineLink inlineText="Already have an account? " linkText="Sign in." hrefLocation='/login' />
                </div>

            </Form>
        </div>
    )
}

export default Register
