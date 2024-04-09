import React, { useState } from "react";

const Component = () => {
  let initiaValue = 0;

  const [value, setValue] = useState(initiaValue);

  const incrementar = () => {
    setValue(value + 1);
  };
  const decrementar = () => {
    setValue(value - 1);
  };
  const reset = () => {
    setValue(0);
  };

  return (
    <>
      <p>Contador: {value} </p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Component;
