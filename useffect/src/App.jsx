import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  //Without dependencies render again and again
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 2000);
  // });

  //With dependencies render once

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 2000);
  // },[]);

  //with variable

  useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 2000);
    },[count]);
  

  return (
    <>
      <h1>Use-Effect Hook</h1>
      <h2>I have rendered {count} times.</h2>
    </>
  );
};

export default App;
