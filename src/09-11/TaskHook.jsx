import React from "react";
import { useTask } from "./hooks/useTasks";

const TaskHook = () => {
  const { tareas } = useTask([]);

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>

          <div>
            <p className="card-text">{tareas.tarea}</p>
            <button
              style={{ backgroundColor: tareas.tarea ? "red" : "orange" }}
            >
              {tareas ? "completada" : "completar"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskHook;
