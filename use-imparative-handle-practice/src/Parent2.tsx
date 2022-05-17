import { useRef } from "react";
import Child2 from "./Child2";

const Parent2 = () => {
  const inputRef = useRef(null);

  return (
    <div>
      <h2>Without useImperativeHandle</h2>
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        focus
      </button>
      <Child2 ref={inputRef} />
    </div>
  );
};

export default Parent2;
