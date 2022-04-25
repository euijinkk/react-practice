import { useRecoilValue, useResetRecoilState } from "recoil";
import { countAtom } from "./state";
import Counter from "./Counter";
import Operator from "./Operator";

function App() {
  const count = useRecoilValue(countAtom);
  const resetCount = useResetRecoilState(countAtom);
  return (
    <div className="App">
      <Counter />
      <div>{count}</div>
      <Operator />
      <button onClick={() => resetCount()}>reset</button>
    </div>
  );
}

export default App;
