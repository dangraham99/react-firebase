import React from 'react'

const FormSubmitBtn = ({ buttonText, hrefLocation }) => {
    return (
        <div className="flex justify-center mt-4">
            <input type="submit" value={buttonText} href={hrefLocation} className='w-full cursor-pointer px-4 py-2 font-bold text-white bg-blue-500 border-neutral-600 border-1 rounded hover:bg-blue-600' />
        </div>
    )
}

export default FormSubmitBtn
