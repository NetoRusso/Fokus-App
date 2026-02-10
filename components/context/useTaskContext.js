import { useContext } from "react";
import { TaskContext } from "./TaskProvider";

export function useTaskContext() {

  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("Tentando usar um contexto fora do provedor!");
  }


  return context;
};