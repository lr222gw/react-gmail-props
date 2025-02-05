import React from 'react'
import Emails from './Emails';


function DisplayEmail({currentSelectedEmail, filteredEmails, toggleRead, toggleStar, setCurrentSelectedEmail}) {
    if (currentSelectedEmail != null) 
    {
        return(
        <div>
            <h3>{currentSelectedEmail.title} {currentSelectedEmail.starred ? "⭐" : "" }</h3>
            <h4>From: {currentSelectedEmail.sender} </h4>
        </div>
        );
    }

    return (
        <Emails filteredEmails={filteredEmails} toggleRead={toggleRead} toggleStar={toggleStar} setCurrentSelectedEmail={setCurrentSelectedEmail}/>
    );
}

export default DisplayEmail