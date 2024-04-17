import { useState } from "react";

export function useForm2() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleForm = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return { form, handleForm, handleSubmit };
}
