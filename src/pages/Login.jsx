import React from 'react'

function Login() {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Snow Chat</span>
            <span className="title">Sign In</span>
            <form action="">
                <input type="email" name="" id="" placeholder='email' />
                <input type="password" name="" id="" placeholder='password' />
                <button>Sign In</button>
            </form>
            <p>Don't have an account ? Register</p>
        </div>
    </div>
  )
}

export default Login