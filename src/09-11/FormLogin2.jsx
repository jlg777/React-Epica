import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import "../index.css";

const FormLogin = () => {
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

  return (
    <>
      <FormControl className="Form" onSubmit={handleSubmit} as="form">
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          id="email"
          value={form.email}
          onChange={handleForm}
          name="email"
        />
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          id="pass"
          value={form.password}
          onChange={handleForm}
          name="password"
        />
        <Button colorScheme="blue" type="submit">
          Button
        </Button>
      </FormControl>
    </>
  );
};

export default FormLogin;
