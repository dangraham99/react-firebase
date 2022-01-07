import React from 'react'

const FormTextInput = ({ inputName, inputType, labelText, inputRef, ...rest }) => {
    return (
        <div className="mb-4">
            <label htmlFor="" className="text-xs uppercase">{labelText}</label>
            <input name={inputName} type={inputType} ref={inputRef} {...rest} className="w-full px-3 py-2 border border-gray-200 rounded appearance-none focus:outline-blue-200 focus:shadow-outline" />
        </div>
    )
}

export default FormTextInput
