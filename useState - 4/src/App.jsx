import React from "react";
import { useState } from "react";

const App = () => {

  const[todos, setTodos] = useState([])
  const[inputValue, setInputValue] = useState('')
 
  const Addtodo =()=>{
    if(inputValue.trim !==''){
      setTodos([...todos, inputValue])
    setInputValue('')
  }
}

  const handleInputChange=(e)=>{
    setInputValue(e.target.value)

  }
  
  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={Addtodo}>Add todo</button>
    </div>
  );
};

export default App;
