import React from 'react'

const Button = ({ children, secondry, login, ...props}) => {
  return (
    <button type='submit' {...props} className={secondry ?  "btn secondry" : login ? "btn login" : "btn"}>
        {children}
    </button>
  )
}

export default Button
