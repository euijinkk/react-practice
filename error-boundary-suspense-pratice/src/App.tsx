import React from "react";
import { useQuery } from "react-query";
import useSWR from "swr";
import Loading from "./Loading";

// fetch('https://jsonplaceholder.typicode.com/todos/1')

const getTodos = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos123"
    );

    if (!response.ok) throw new Error("fetch 실패");

    const data = response.json();

    return data;
  } catch ({ message }) {
    throw new Error(message);
  }
};

function App() {
  const { isLoading, isError, data, error, refetch } = useQuery(
    "todos",
    getTodos,
    {
      suspense: true,
      enabled: false,
    }
  );
  console.log("data", data);
  console.log("isError", isError);

  const handleClick = () => {
    refetch();
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Fetch</button>
      {data?.map((datum) => (
        <div key={datum.id}>{datum.title}</div>
      ))}
    </div>
  );
}

export default App;
