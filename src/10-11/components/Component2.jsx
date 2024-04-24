import { useContext } from "react";
import { Counter } from "../providers/CounterProvider";

const Component2 = () => {
  const { counter, sumar, restar } = useContext(Counter);

  return (
    <>
      <p>Contador= {counter}</p>
      <button onClick={sumar}>sumar</button>
    </>
  );
};
export default Component2;
