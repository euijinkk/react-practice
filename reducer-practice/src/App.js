import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state.count < action.max
        ? { count: state.count + action.step }
        : state;
    case "DECREMENT":
      return state.count > action.min
        ? { count: state.count - action.step }
        : state;
    case "RESET":
      return initialState;
    case "RANDOM":
      return {
        count:
          Math.floor(Math.random() * (action.max - action.min)) + action.min,
      };
    default:
      throw new Error("Unsupported action type:", action.type);
  }
}

const step = 1;
const min = 0;
const max = 10;

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>
        단계: {step}, 최소: {min}, 최대: {max}
      </p>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT", step, max })}>
        증가
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", step, min })}>
        감소
      </button>
      <button onClick={() => dispatch({ type: "RANDOM", min, max })}>
        무작위
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>초기화</button>
    </>
  );
}

export default App;
