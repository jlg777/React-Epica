import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import FormLogin from "./09-11/FormLogin2.jsx";

const theme = extendTheme({
  config: {
    initialColorMode: "dark", // Establece el modo inicial
    useSystemColorMode: true, // Desactiva el uso del modo del sistema
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <FormLogin />
    </ChakraProvider>
  </React.StrictMode>
);
