import { useState } from "react";
import Header from "./components/Header";


function App() {
 
const[counter, setCounter] = useState(0)


  return(
   <>
   <Header />
   <h1>{counter}</h1>
   <button onClick={()=>{setCounter(prev=>prev+1)}}>Click here</button>
  </>
  )
}

export default App;
