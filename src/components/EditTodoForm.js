import React, { useState } from 'react'

const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)
    const HandleChange = (res) => setValue(res.target.value)
    const HandleSubmit = e => (
        e.preventDefault(),
        editTodo(value, task.id),
        setValue("")
    )

  return (
    <div>
      <form className='TodoForm' onSubmit={HandleSubmit}>
        <input 
        type='text' 
        className='todo-input'
        value={value} 
        placeholder='Update Task'
        onChange={
            HandleChange
        }
        required></input>
        <button type='submit' className='todo-btn'>Update Task</button>
      </form>
    </div>
  )
}

export default EditTodoForm

