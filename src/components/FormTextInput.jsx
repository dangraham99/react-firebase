import React from 'react'

const FormTextInput = ({ inputName, inputType, labelText }) => {
    return (
        <div className="mb-4">
            <label htmlFor="" className="text-xs uppercase">{labelText}</label>
            <input name={inputName} type={inputType} className="appearance-none border focus:outline-blue-200 focus:shadow-outline border-gray-200 rounded w-full py-2 px-3" />
        </div>
    )
}

export default FormTextInput
