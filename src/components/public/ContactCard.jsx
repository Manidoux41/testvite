import React from 'react'

const ContactCard = (props) => {
  return (
    <div className='contact__card'>
        <h3>Bienvenue sur le site de {props.name}</h3>
    </div>
  )
}

export default ContactCard