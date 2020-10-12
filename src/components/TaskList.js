import React, { useContext } from "react";
import { TaskListContext } from "../contexts/TaskListContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks,title } = useContext(TaskListContext);

  return (
    <div>
      {tasks.length ? (
        <ul className="list">
          {
          tasks.filter(task => { 
            console.log({title}.title);
            console.log(task.title)
            console.log(task.title.search({title}.title));
            return task.title.search({title}.title) !== -1;
          
          })
          .map(task => {
            return <Task task={task} key={task.id} />;
            
          })}
        </ul>
      ) : (
        <div className="no-tasks">No Tasks</div>
      )}
    </div>
  );
};

export default TaskList;
