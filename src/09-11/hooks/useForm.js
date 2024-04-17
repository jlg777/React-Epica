import { useState } from "react";

export function useForm(params) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (e) => {
    setEmail(e.target.value);
    //console.log(email);
  };

  const handlePass = (e) => {
    setPassword(e.target.value);
    //console.log(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return { email, password, handleInput, handlePass, handleSubmit };
}
