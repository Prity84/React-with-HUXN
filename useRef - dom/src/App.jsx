import { useEffect, useRef, useState } from "react";

function App() {
  const inputElm = useRef();
//Direct accessing the DOM element
  const btnClicked = () => {
    console.log(inputElm.current);
    inputElm.current.style.backgroundColor = "blue";
  };

  return (
    <>
      <input type="text" ref={inputElm} />

      <button onClick={btnClicked}>Click here</button>
    </>
  );
}

export default App;
