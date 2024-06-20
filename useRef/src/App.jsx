import { useEffect, useRef, useState } from "react";

function App() {
  const [value, Setvalue] = useState(0);
  // const [count, setCount] = useState(0)

  // useEffect(()=>{
  //   setCount(prev => prev+1)
  // })

  const count = useRef(0);

  useEffect(()=>{
    count.current = count.current + 1
  })

  return (
    <>
      <h1></h1>
      <button
        onClick={() => {
          Setvalue((prev) => prev - 1);
        }}
      >
        -1
      </button>
      <h2>{value}</h2>
      <button
        onClick={() => {
          Setvalue((prev) => prev + 1);
        }}
      >
        +1
      </button>
      <h1>Render count: {count.current} </h1>
    </>
  );
}

export default App;
