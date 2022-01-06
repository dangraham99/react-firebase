import React from 'react'

const FormSubmitBtn = ({ disabled, buttonText, hrefLocation }) => {
    return (
        <div className="flex justify-center mt-4">
            <input type="submit" disabled={disabled} value={buttonText} href={hrefLocation} className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded cursor-pointer border-neutral-600 border-1 hover:bg-blue-600' />
        </div>
    )
}

export default FormSubmitBtn
