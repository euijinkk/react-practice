import { decrease, increase, increaseBy } from "../actionCreators";
import { DECREASE, INCREASE, INCREASE_BY } from "../actions";

type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

// 같은 코드 - 액션생성함수는 왜 필요한가?
type CounterAction2 =
  | { type: typeof INCREASE }
  | { type: typeof DECREASE }
  | { type: typeof INCREASE_BY; payload: number };

// 같은 코드 - 액션과 액션 생성 함수는 왜 정의해야하는가?
type CounterAction3 =
  | { type: "counter/INCREASE" }
  | { type: "counter/DECREASE" }
  | { type: "counter/INCREASE_BY"; payload: number };

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

function counterReducer(
  state: CounterState = initialState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default counterReducer;
