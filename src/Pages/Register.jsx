import React from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'
import { useNavigate } from 'react-router'

const Register = () => {

  const navigate = useNavigate()

  return (
     <div className='register-page'>
      <div className="login-form">
       <div id="text">
         <h1 className='heading auth-text'>Create your PopX account</h1>
       </div>
        <div className="inputs">
          <Input required placeholder="Enter Full Name" label="Full Name"/>
          <Input required placeholder="Enter Phone number" label="Phone number"/>
          <Input required placeholder="Enter Email address" label="Email address"/>
          <Input required placeholder="Enter Password" label="Password"/>
          <Input required placeholder="Enter Company name" label="Company name"/>
          <div className="radio-group">
            <p>Are you an Agency?<span>*</span></p>

            <div className="radio-options">
              <label className="radio">
                <input type="radio" name="agency" defaultChecked />
                <span className="custom-radio"></span>
                Yes
              </label>

              <label className="radio">
                <input type="radio" name="agency" />
                <span className="custom-radio"></span>
                No
              </label>
            </div>
          </div>
          <div className="create-acc-btn">
            <Button onClick={() => navigate("/account")}>
              Create Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
