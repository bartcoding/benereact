import React, { createContext, useState, useEffect } from "react";
import uuid from "uuid";

export const TaskListContext = createContext();

const TaskListContextProvider = props => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("tasks" + JSON.stringify(tasks))
  }, [tasks]);




const filteredTasks = title => {tasks.filter((task) => { return task.title.indexOf(title) !== -1;
})} 




  const [editItem, setEditItem] = useState(null);

  // Add tasks
  const addTask = title => {
    setTasks([...tasks, { title, id: uuid() }]);
    console.log(title)
  };

  // Remove tasksAdd
  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Filter
  const handleFilter = e => {
    tasks.filter((task) => { return task.title.indexOf(e) !== -1;
    });
    console.log("whatintheinput " + e)
    // console.log("input" + (e.target.value))

  }


  // Clear tasks
  const clearList = () => {
    setTasks([]);
    console.log("clear clicked");
  };

  // Find task
  const findItem = id => {
    const item = tasks.find(task => task.id === id);
    setEditItem(item);
    console.log("item" + JSON.stringify(item));
  };

  // Edit task
  const editTask = (title, id) => {
    const newTasks = tasks.map(task => (task.id === id ? { title, id } : task));
    setTasks(newTasks);
    setEditItem(null);
    console.log("edit clicked");
  };

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        handleFilter,
        filteredTasks,
        removeTask,
        clearList,
        findItem,
        editTask,
        editItem,
        

      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
