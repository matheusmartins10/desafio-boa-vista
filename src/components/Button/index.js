import React from 'react'

const Button = ({children, type, ...rest}) => {
    return (
        <button {...rest} type={type} > {children} </button>
    )
}

export default Button
