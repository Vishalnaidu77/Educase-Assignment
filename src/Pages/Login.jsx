import React from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'

const Login = () => {
  return (
    <div className='login-page'>
      <div className="login-form">
       <div id="text">
         <h1 className='heading'>Signin to your PopX account</h1>
         <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
       </div>
        <div className="inputs">
          <Input placeholder="Enter email address" label="Email Address"/>
          <Input placeholder="Enter Password" label="Password"/>
          <Button login>
            Login
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Login
