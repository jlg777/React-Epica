import { useCounter } from "../hooks/useCounter";

const Component3 = () => {
  const { counter, sumar, restar } = useCounter();
  return (
    <>
      <p>Contador= {counter}</p>s<button onClick={sumar}>sumar</button>
    </>
  );
};
export default Component3;
