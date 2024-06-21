import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const expensiveCalculation = useMemo(() => {
    console.log("Running expensive calculation...");
    let result = 0;
    for (let i = 0; i <= count * 1000000; i++) {
      result += i;
    }
    return result;
  }, [count]);

  return (
    <>
      <h2>Expensive Component</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Result of expensive calculation: {expensiveCalculation}</p>
    </>
  );
}

export default App;
