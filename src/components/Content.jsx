import React from 'react'

function Content({ children, pageTitle }) {
    return (
        <div className='mx-12 lg:mx-0'>
            <h1 className="text-2xl font-bold">{pageTitle}</h1>
            {children}
        </div>
    )
}

export default Content
