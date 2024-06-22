import React, { useContext } from 'react'
import { AppContext } from '../context/Appcontext'

const Contact = () => {

    const {phone, name} = useContext(AppContext)
  return (
    <div>
      <h3>Contact</h3>
      <p>Phone :{phone}</p>
      <p>name :{name}</p>
    </div>
  )
}

export default Contact
