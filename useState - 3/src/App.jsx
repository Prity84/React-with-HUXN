import React from 'react'
import { useState } from 'react'

const App = () => {
  const[isOn, setIson] = useState(false)

  const toggle =()=>{
    setIson(!isOn)
  }
  return (
    <div>
         <button onClick={toggle}>{isOn? 'ON' : 'OFF'}</button>
         <p>The button is {isOn? 'ON' : 'OFF'}.</p>
    </div>
  )
}

export default App

