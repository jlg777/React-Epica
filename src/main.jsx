import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { UsernameContext } from "./10-11/providers/UsernameProvider.jsx";
import Component1 from "./10-11/components/Component1.jsx";
import UserChildrenProvider from "./10-11/children/UserChildrenProvider.jsx";
import Component2 from "./10-11/components/Component2.jsx";
import CounterProvider from "./10-11/providers/CounterProvider.jsx";
import Component3 from "./10-11/components/Component3.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserChildrenProvider>
      <UsernameContext.Provider value={{ username: "jorge" }}>
        <CounterProvider>
          <Component1 />
          <Component2 />
          <Component3 />
        </CounterProvider>
      </UsernameContext.Provider>
    </UserChildrenProvider>
  </React.StrictMode>
);
