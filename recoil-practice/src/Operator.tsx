import React from "react";
import { useSetRecoilState } from "recoil";
import { countAtom } from "./state";

const Operator = () => {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setCount((pre) => pre + 1)}>+</button>
      <button onClick={() => setCount((pre) => pre - 1)}>-</button>
    </div>
  );
};

export default Operator;
