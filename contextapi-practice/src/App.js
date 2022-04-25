import { createContext, useState } from "react";
import "./App.css";
import Count from "./components/Count";
import Plus from "./components/Plus";

export const CountContext = createContext(null);

function CountProvider({ children }) {
  const [count, setCount] = useState(0);

  const plusCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <CountContext.Provider value={{ count, plusCount }}>
      {children}
    </CountContext.Provider>
  );
}

function App() {
  return (
    <CountProvider>
      <Count />
      <Plus />
    </CountProvider>
  );
}

export default App;
