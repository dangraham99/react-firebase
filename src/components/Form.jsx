import React from 'react'

const Form = (props) => {
    return (
        <div>
            <h1 className="font-bold text-2xl py-8 max-w-sm mx-auto text-center">{props.formTitle}</h1>
            <form action={props.formAction} className="mx-auto bg-white text-gray-700 font-semibold shadow-md rounded-md px-8 pt-6 pb-8 mb-4 max-w-sm ">
                {props.children}
            </form>
        </div>
    )
}

export default Form
