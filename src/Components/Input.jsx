import React from 'react'

const Input = ({label, placeholder, required}) => {
  return (
    <div className='input-box'>
      <label htmlFor="email">{label} {required ? <span>*</span> : null}</label>
      <input
       id='email'
       type="email" 
       placeholder={placeholder}
       required={required}
      />
    </div>
  )
}

export default Input
