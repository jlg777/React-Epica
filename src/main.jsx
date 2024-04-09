import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Task from "./08-11/Task.jsx";
import { taskList } from "./08-11/taskList.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {taskList.map((task) => (
      <Task key={task.id} tarea={task.tarea} realizada={task.realizada} />
    ))}
  </React.StrictMode>
);
