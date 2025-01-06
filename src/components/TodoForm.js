import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const HandleChange = (res) => setValue(res.target.value)
    const HandleSubmit = e => (
        e.preventDefault(),
        addTodo(value),
        setValue("")
    )

  return (
    <div>
      <form className='TodoForm' onSubmit={HandleSubmit}>
        <input 
        type='text' 
        className='todo-input'
        value={value} 
        placeholder='What is the task today?'
        onChange={
            HandleChange
        }
        required></input>
        <button type='submit' className='todo-btn'>Add Task</button>
      </form>
    </div>
  )
}

export default TodoForm
