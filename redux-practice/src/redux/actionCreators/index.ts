import { DECREASE, INCREASE, INCREASE_BY } from "../actions";

const increase = () => ({ type: INCREASE });
const decrease = () => ({ type: DECREASE });
const increaseBy = (diff: number) => ({ type: INCREASE_BY, payload: diff });

export { increase, decrease, increaseBy };
