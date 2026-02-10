import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useRef, useState } from "react";




export const TaskContext = createContext();

const TASKS_STORAGE_KEY = "fokus-tasks";

export function TasksProvider({ children }) {

  const [tasks, setTasks] = useState([]);
  const idCounterRef = useRef(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(TASKS_STORAGE_KEY);
        const loadedData = jsonValue != null ? JSON.parse(jsonValue) : [];
        setTasks(loadedData);
        
        if (loadedData.length > 0) {
          const maxId = Math.max(...loadedData.map(t => t.id));
          idCounterRef.current = maxId;
        }
        
        console.log("Tarefas carregadas: ", loadedData);

      } catch (e) {
        console.error("Erro ao carregar tarefas: ", e);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [])

  useEffect(() => {

    const storeData = async (value) => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(TASKS_STORAGE_KEY, jsonValue);
      } catch (e) {
        console.error("Erro ao persistir tarefas: ", e);
      }
    }

    if (!isLoading) {
      storeData(tasks);
    }

    }, [tasks, isLoading])

  const addTask = (description) => {
    console.log(`Tarefa adicionada: ${description}`);
    setTasks(oldState => {
      return [
        ...oldState,
        {
          description,
          id: idCounterRef.current += 1,
        }
      ]
    })
    //Chamar persistencia aqui
  };

  const toggleTaskCompleted = (id) => {
    setTasks(oldState => {
      return oldState.map(t => {
        if (t.id === id) {
          t.completed = !t.completed;
        }
        return t;
      })
    })
    //Chamar persistencia aqui
  };

  const deleteTask = (id) => {
    setTasks(oldState => {
      return oldState.filter(t => t.id !== id);
    })
    //Chamar persistencia aqui
  };

  const editTask = (id, newDescription) => {
    setTasks(oldState => {
      return oldState.map( t => {
        if (t.id === id) {
          return { ...t, description: newDescription };
        }
        return t;
      })
    })
  };

  return (
    <TaskContext.Provider value={{
      tasks,
      addTask,
      toggleTaskCompleted,
      deleteTask,
      editTask,
    }}>
      {children}
    </TaskContext.Provider>
  )
};