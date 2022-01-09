import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const FormInlineLink = ({ inlineText, linkText, to, routerLink = true }) => {


    return (
        <p className="mt-3 text-sm text-gray-500">{inlineText}
            {routerLink ? <Link to={to} className="text-blue-500 underline cursor-pointer">{linkText}</Link> : <a href={to} className="text-blue-500 underline cursor-pointer">{linkText}</a>}
        </p>
    )

}



export default FormInlineLink
