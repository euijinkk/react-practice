import React, { useRef } from "react";
import "./App.css";
import Child1 from "./Child1";

function Parent1() {
  const inputRef = useRef(null);

  return (
    <div className="App">
      <h2>With useImperativeHandle</h2>
      <button
        onClick={() => {
          inputRef.current.focus();
          console.log("inputRef.current", inputRef.current); // ??
        }}
      >
        focus
      </button>
      <Child1 ref={inputRef} />
    </div>
  );
}

export default Parent1;
