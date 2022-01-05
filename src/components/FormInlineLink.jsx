import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const FormInlineLink = ({ inlineText, linkText, hrefLocation, routerLink = true }) => {


    return (
        <p className="text-sm mt-3 text-gray-500">{inlineText}
            {routerLink ? <Link to={hrefLocation} className="underline text-blue-500 cursor-pointer">{linkText}</Link> : <a href={hrefLocation} className="underline text-blue-500 cursor-pointer">{linkText}</a>}
        </p>
    )

}



export default FormInlineLink
