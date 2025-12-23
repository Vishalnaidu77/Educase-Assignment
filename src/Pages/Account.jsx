import React from 'react'
import { FaCamera } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { Navigate, useNavigate } from 'react-router';

const Account = () => {

  const navigate = useNavigate()

  return (
    <div>
      <nav>
        <div className="go-back">
          <IoIosArrowBack onClick={() => navigate("/")} />
        </div>
        <h2 className='account-head'>Account Settings</h2>
      </nav>
      <div className="profile">
        <div className="profile-photo">
          <img src="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <div className="camera-icon">
            <FaCamera />
          </div>
        </div>
        <div className="profile-name">
          <h3>Marry Doe</h3>
          <h5>marry@gmail.com</h5>
        </div>
      </div>
      <h4 className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facere est eligendi porro enim sequi animi nesciunt.
      </h4>
    </div>
  )
}

export default Account
