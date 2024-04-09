import React, { useState } from "react";
import { taskList } from "./taskList";

/*const Task = () => {
  const [tarea, setTarea] = useState(taskList);

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          {taskList.map((task) => (
            <div key={task.id}>
              <p className="card-text">{task.tarea}</p>
              <button
                onClick={() => setTarea(!taskList.realizada)}
                style={{ backgroundColor: tarea ? "red" : "orange" }}
              >
                {tarea ? "completada" : "completar"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};*/

const Task = ({ tarea, realizada }) => {
  const [tareas, setTareas] = useState(realizada);

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>

          <div>
            <p className="card-text">{tarea}</p>
            <button
              onClick={() => setTareas(!tareas)}
              style={{ backgroundColor: tareas ? "red" : "orange" }}
            >
              {tareas ? "completada" : "completar"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Task;
