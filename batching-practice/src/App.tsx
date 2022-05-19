import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  useEffect(() => {
    console.log("count", count);
  }, [count]);

  return <button onClick={handleClick}>+</button>;
}

export default App;
