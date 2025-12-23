import React from 'react'
import Button from '../Components/Button'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {

  const navigate = useNavigate()

  return (
    <div className='welcome-page'>
      <div className="bottom">
       <div id="text">
         <h1 className='heading'>Welcome to PopX</h1>
         <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
       </div>
        <div className="btns">
          <Button onClick={() => navigate("/register")}>
            Create Account
          </Button>
          <Button secondry onClick={() => navigate("/login")}> 
            Already registered? Login
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Welcome
