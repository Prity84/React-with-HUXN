import { useCallback, useState } from "react";
import Header from "./components/Header";

function App() {
  const [counter, setCounter] = useState(0);

  //usecallback not create another fun cache fun in memory store
  const newFn = useCallback(() => {}, []);

  return (
    <>
      <Header newFn={newFn} />
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        Click here
      </button>
    </>
  );
}

export default App;
