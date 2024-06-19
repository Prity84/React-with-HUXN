import React, { useState } from 'react'

function Count(){
    const [count, setCount] = useState(0)

   const insreaseValue=()=>{
    //    setCount(count+1)
    //    setCount(count+1)
    //    setCount(count+1)

    //by more than one increment
     setCount(prev=>prev+1)
     setCount(prev=>prev+1)
     setCount(prev=>prev+1)


    }
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={insreaseValue}>Increase</button>
    </>
  )
}

export default Count
