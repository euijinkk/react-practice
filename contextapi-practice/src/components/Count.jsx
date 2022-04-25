import React, { useContext } from "react";
import { CountContext } from "../App";

function Count() {
  const { count } = useContext(CountContext);
  return <div>{count}</div>;
}

export default Count;
