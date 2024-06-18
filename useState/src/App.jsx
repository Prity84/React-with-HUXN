import { useState } from "react";

function App() {

  const [color, Setcolor] = useState('Red')
  


  const changeColor =()=>{
    Setcolor('Blue')
  }
  return (
    <>
      <h1>my favourite color is {color}</h1>
      <button onClick={changeColor}>Blue</button>
    </>
  );
}

export default App;
