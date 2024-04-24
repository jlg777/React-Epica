import { createContext, useState } from "react";

export const Counter = createContext();

const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const sumar = () => {
    setCounter(counter + 1);
  };
  const restar = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <Counter.Provider value={{ counter, sumar, restar }}>
        {children}
      </Counter.Provider>
    </>
  );
};
export default CounterProvider;
