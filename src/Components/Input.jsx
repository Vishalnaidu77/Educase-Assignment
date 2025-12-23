import React from 'react'

const Input = ({label, placeholder}) => {
  return (
    <div className='input-box'>
      <label htmlFor="email">{label}</label>
      <input
       id='email'
       type="email" 
       placeholder={placeholder} 
      />
    </div>
  )
}

export default Input
