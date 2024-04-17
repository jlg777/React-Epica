import React from "react";
import { useCounter } from "./hooks/useCounter";

const CounterComponent = () => {
  let initialValue = 0;
  const { value, incrementar, decrementar, reset } = useCounter(initialValue);
  return (
    <>
      <p style={{ color: "white" }}>Contador: {value} </p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default CounterComponent;
