import { useEffect, useState } from "react";
import { taskList } from "../../08-11/taskList.js";
import { useParams } from "react-router-dom";

export function useTask() {
  const [tareas, setTareas] = useState("");
  const [taskId] = useState("1");

  useEffect(() => {
    // Buscar la tarea correspondiente al taskId en la lista de tareas
    const foundTask = taskList.find((task) => task.id == taskId);
    // Actualizar el estado con la tarea encontrada
    setTareas(foundTask);
    console.log(foundTask);
  }, [taskId]); // Re-ejecutar este efecto cuando cambie taskId

  return { tareas };
}
