import React, { useContext } from "react";
import { CountContext } from "../App";

function Plus() {
  const { plusCount } = useContext(CountContext);
  return <div onClick={plusCount}>+</div>;
}

export default Plus;
