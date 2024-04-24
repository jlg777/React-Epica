import { useContext } from "react";
import { Counter } from "../providers/CounterProvider";

export const useCounter = () => useContext(Counter);
