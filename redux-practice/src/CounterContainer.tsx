import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Counter from "./Counter";
import { decrease, increase, increaseBy } from "./redux/actionCreators";
import { RootState } from "./redux/reducers";

function CounterContainer() {
  const count = useSelector((state: RootState) => state.counterReducer.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };

  return (
    <Counter
      count={count}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
    />
  );
}

export default CounterContainer;
