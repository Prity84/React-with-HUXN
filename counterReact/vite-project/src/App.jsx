import { useState } from "react"



function App() {
   
  let [counter, setCounter] = useState(15)
  //Batches me UI ke andar send krta h h useState
  //Sbka batch bnega then send
  //for this prevCounter => last updated state

  const addValue = ()=>{

    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)

    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)

  }

  const removeValue =()=>{
    // setCounter(counter-1)
    setCounter(prevCounter => prevCounter-1)
    setCounter(prevCounter => prevCounter-1)
    setCounter(prevCounter => prevCounter-1)

  }


  return (
    <>
       <h1>Hello world</h1>
       <h2>Counter Value : {counter}</h2>

       <button onClick={addValue}>Add Value {counter}</button>
       <br />
       <button onClick={removeValue}>Remove Value {counter}</button>
       <p>Footer : {counter}</p>
        
    </>
  )
}

export default App
