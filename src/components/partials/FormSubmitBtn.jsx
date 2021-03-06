import React from 'react'

const FormSubmitBtn = ({ disabled, buttonText, ...rest }) => {
    return (
        <div className="flex justify-center mt-4">
            <input type="submit" disabled={disabled} value={buttonText} {...rest} className='w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded cursor-pointer disabled:bg-blue-300 border-neutral-600 border-1 hover:bg-blue-600' />
        </div>
    )
}

export default FormSubmitBtn
