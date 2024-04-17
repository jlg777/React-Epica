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

  return (
    <>
      <FormControl className="Form" onSubmit={handleSubmit} as="form">
        <FormLabel>Email address</FormLabel>
        <Input type="email" id="email" value={email} onChange={handleInput} />
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          id="pass"
          value={password}
          onChange={handlePass}
        />
        <Button colorScheme="blue" type="submit">
          Button
        </Button>
      </FormControl>
    </>
  );
};

export default FormLogin;
