import React from 'react'

function Search() {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className="userChat">
        <img src="https://render.fineartamerica.com/images/rendered/share/19840330&domainId=12" alt="" />
        <div className="userChatInfo">
          <span>Daenerys</span>
        </div>
      </div>
    </div>
  )
}

export default Search