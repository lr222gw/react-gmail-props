import React from 'react'
import Email from './Email'

// I hope it is okay that I passed them like this rather than a 
// single prop... 
function Emails({filteredEmails, toggleRead, toggleStar, setCurrentSelectedEmail}) {
  return (
    <main className="emails">
        <ul>
            {filteredEmails.map((email, index) => (
            <Email key={index} email={email} index={index} toggleRead={toggleRead} toggleStar={toggleStar} setCurrentSelectedEmail={setCurrentSelectedEmail}/>
            ))}
        </ul>
    </main>
  )
}

export default Emails