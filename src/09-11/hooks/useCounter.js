import { useState } from "react";

export function useCounter(initialValue) {
  const [value, setValue] = useState(initialValue);

  const incrementar = () => {
    setValue(value + 1);
  };
  const decrementar = () => {
    setValue(value - 1);
  };
  const reset = () => {
    setValue(0);
  };

  return { value, incrementar, decrementar, reset };
}
