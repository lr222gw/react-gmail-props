import React from 'react'

function Email({email, index, toggleRead, toggleStar, setCurrentSelectedEmail}) {
  return (
    <li
        key={index}
        className={`email ${email.read ? 'read' : 'unread'}`}
        onClick={() => setCurrentSelectedEmail(email)}
    >
        <div className="select">
        <input
            className="select-checkbox"
            type="checkbox"
            checked={email.read}
            onChange={() => toggleRead(email)}
        />
        
        </div>
        <div className="star">
        <input
            className="star-checkbox"
            type="checkbox"
            checked={email.starred}
            onChange={() => toggleStar(email)}
        />
        </div>
        <div className="sender">{email.sender}</div>
        <div className="title">{email.title}</div>
    </li>
  )
}

export default Email