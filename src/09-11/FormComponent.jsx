import React from "react";
import { useForm } from "./hooks/useForm";

const FormComponent = () => {
  const { email, password, handleInput, handlePass, handleSubmit } = useForm();

  return (
    <>
      <form className="Form" onSubmit={handleSubmit}>
        <label>Email address</label>
        <input type="email" id="email" value={email} onChange={handleInput} />
        <label>Password</label>
        <input
          type="password"
          id="pass"
          value={password}
          onChange={handlePass}
        />
        <button type="submit">Button</button>
      </form>
    </>
  );
};

export default FormComponent;
