import React from "react";
import { useForm2 } from "./hooks/useForm2";

const FormComponent2 = () => {
  const { form, handleForm, handleSubmit } = useForm2();

  return (
    <>
      <form className="Form" onSubmit={handleSubmit}>
        <label>Email address</label>
        <input
          type="email"
          id="email"
          value={form.email}
          onChange={handleForm}
          name="email"
        />
        <label>Password</label>
        <input
          type="password"
          id="pass"
          value={form.password}
          onChange={handleForm}
          name="password"
        />
        <button type="submit">Button</button>
      </form>
    </>
  );
};

export default FormComponent2;
