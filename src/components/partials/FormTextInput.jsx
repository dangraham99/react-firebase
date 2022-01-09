import React, {forwardRef} from 'react'

const FormTextInput = forwardRef(( props, ref ) => {
    return (
        <div className="mb-4">
            <label htmlFor="" className="text-xs uppercase">{props.labelText}</label>
            <input ref={ref} onChange={props.onChange} {...props} className="w-full px-3 py-2 border border-gray-200 rounded appearance-none focus:outline-blue-200 focus:shadow-outline" />
        </div>
    )
})

export default FormTextInput
