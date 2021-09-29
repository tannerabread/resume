import React from 'react'

const Contacts = ({ contacts }) => {
  return (
    <>
      <ul>
        {contacts.map((contact, i) => (
          <li key={i}>
            {contact.name}: 
            <a href={contact.link}>{contact.linkText}</a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Contacts