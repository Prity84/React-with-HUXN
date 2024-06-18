import { useState } from "react";
import Count from "./Count";

function App() {
 
  const[car, setCar] = useState({
    brand: "Aulto",
    model: "Roma",
    year: "2024",
    color: "yellow"
  })
  const changeColor = ()=>{
    setCar((prev)=>{
      return{...prev, color: "blue"}
    })
  }
 
  return (
    <>
      <h1>my {car.brand}</h1>
      <h2>It is a {car.color} {car.model} from  {car.year}</h2>
      <button onClick={changeColor}> it is a {car.color} </button>

      <Count/>
    </>
  );
}

export default App;
