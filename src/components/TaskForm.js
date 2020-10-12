import React, { useState, useContext, useEffect } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'

const TaskForm = () => {
  const { addTask,handleFilter , clearList, editTask, editItem } = useContext(TaskListContext)
  const [title, setTitle] = useState('')

  const handleChange = e => {
    setTitle(e.target.value)
    // console.log("input" + (e.target.value))

  }

  const handleAddClick = e => {
    addTask(title)
  }

  const handleFilterClick = e => {
    handleFilter(title)
  }
  // if (title.length > 0) { nba = nba.filter((i) => {return i.name.match(title);})};

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
      console.log("TaskListContext2" + editItem.title)
      console.log("TaskListContext2" + JSON.stringify(TaskListContext.title))
    } else {
      setTitle('')
    }
  }, [editItem])

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Add Task..."
        value={title}
        onChange={handleChange}
        required
        className="task-input"
      />
      <div className="buttons">
        <button className="btn add-task-btn" onClick = {handleAddClick}>
          {editItem ? 'Edit Task' : 'Add Task'}
        </button>
        <button className="btn clear-btn" onClick={clearList}>
          Clear
        </button>        
        <button className="btn clear-btn" onClick={handleFilterClick}>
          Filter
        </button>
      </div>
    </div>
  )
}

export default TaskForm
