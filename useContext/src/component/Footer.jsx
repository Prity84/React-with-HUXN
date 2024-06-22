import React, { useContext } from 'react'
import { AppContext } from '../context/Appcontext'

const Footer = () => {

    const {phone, name} =useContext(AppContext)
  return (
    <div>
      <h2>Footer</h2>
      <p>Phone:{phone} </p>
      <p>Name : {name}</p>
    </div>
  )
}

export default Footer
