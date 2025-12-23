import React from 'react'
import Button from '../Components/Button'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {

  const navigate = useNavigate()

  return (
    <div className='welcome-page'>
      <div className="bottom">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <Button onClick={() => navigate("/register")}>
          Create Account
        </Button>
        <Button onClick={() => navigate("/login")}> 
          Already registered? Login
        </Button>
      </div>
    </div>
  )
}

export default Welcome
