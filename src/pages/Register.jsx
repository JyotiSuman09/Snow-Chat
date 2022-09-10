import React from 'react'
import Add from '../img/addAvatar.png'

function Register() {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Snow Chat</span>
            <span className="title">Register</span>
            <form action="">
                <input type="text" name="" id="" placeholder='display name' />
                <input type="email" name="" id="" placeholder='email' />
                <input type="password" name="" id="" placeholder='password' />
                <input type="file" name="" id="file" style={{display: "none"}}/>
                <label htmlFor="file">
                    <img src={Add} alt="" />
                    <span>Add your avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>Already have an account? Login</p>
        </div>
    </div>
  )
}

export default Register