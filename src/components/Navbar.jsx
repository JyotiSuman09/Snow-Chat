import React from 'react'

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Snow Chat</span>
      <div className="user">
        <img src="https://render.fineartamerica.com/images/rendered/share/23234307&domainId=12" alt="" />
        <span>Jhon</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar