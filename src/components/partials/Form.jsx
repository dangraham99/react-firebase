import React from 'react'

const Form = (props) => {
    return (
        <div>

            <form method="post" onSubmit={props.onSubmit} className="max-w-sm px-8 pt-6 pb-8 mx-auto mb-4 font-semibold text-gray-700 bg-white rounded-md shadow-md ">
                <h1 className="max-w-sm pb-4 mx-auto text-2xl font-bold text-center">{props.formTitle}</h1>
                {props.formError && <div className="p-3 my-3 text-sm text-center text-red-700 bg-red-200 rounded">{props.formError}</div>}
                {props.formMessage && <div className="p-3 my-3 text-sm text-center text-green-700 bg-green-200 rounded">{props.formMessage}</div>}
                {props.children}
            </form>
        </div>
    )
}

export default Form
