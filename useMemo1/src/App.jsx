import { useMemo } from "react";
import { useState } from "react";

function App() {
  const[num, setNum] = useState(0)
  const[counter, setCounter] = useState(0)

function cubeNum(num){
  console.log('calculation done')
  return Math.pow(num, 3)
}

// const result = cubeNum(num)

const result = useMemo(()=>{return cubeNum(num)}, [num]);

  return(
   <>
   <input type="number" value={num} onChange={(e)=>{setNum(e.target.value)}} />
   <h1>Cube of the number : {result}</h1>
   <button onClick={()=>{setCounter(counter+1)}}>counter++</button>
   <h1>Counter : {counter}</h1>
  </>
  )
}

export default App;
