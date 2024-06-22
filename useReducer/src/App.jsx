import { useState, useReducer } from "react";

function App() {

  const initialState = {counter:0}
  // useReducer(reducer, {counter:0})

const reducer = (state, action) =>{
  switch(action.type){
    case 'increase' : {
      return{counter: state.counter+1}
    }

    case 'decrese' : {
      return{counter: state.counter-1}
    }
   
    case 'input' : {
      return{counter: action.payload}
    }
   
    default : {
      return state
    }
  }
  // return{counter: state.counter+1}
}

  const [state, dispath] = useReducer(reducer, initialState)
  return(
   <>
   <h1>{state.counter}</h1>
   <button onClick={()=>dispath({type: 'increase'})}>increase</button>
   <button onClick={()=>dispath({type: 'decrese'})}>decrease</button>
   <input value={state.counter} onChange={(e)=>dispath({type: 'input', payload:Number(e.target.value)})} type="number" />

  </>
  )
}

export default App;
