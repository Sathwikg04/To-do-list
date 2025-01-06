import React, { useEffect, useState } from 'react';
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import {v4 as uuidv4} from 'uuid';
import EditTodoForm from './EditTodoForm';
uuidv4();

const TodoWrapper = () => {

    const getLocalItems = () => {
        let list = localStorage.getItem('list')
        console.log(list);
        if (list) {
            return JSON.parse(list)
        }
        return [];
    }

    const [todos, setTodos] = useState(getLocalItems())


    const addTodo = todo => {
        setTodos([...todos, {
            id: uuidv4(),
            task: todo,
            completed: false,
            isEditing: false
        }])
        console.log(todos)
    }

    const toggleComplete = id => {
        setTodos(
            todos.map(todo => todo.id===id ? {...todo, completed: !todo.completed} : todo)
        )
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id===id ? {...todo, task, isEditing: !todo.isEditing}: todo))
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(todos))
      },[todos])

  return (
    <div className='TodoWrapper'>
        <h1>Things to do Today</h1>
      <TodoForm addTodo={addTodo}/>
      <div className='EditTodoForm'>
      {/* <p>Incomplete Tasks</p> */}
      {todos.map((todo, index) => (
        !todo.completed ? 
        (todo.isEditing ? (
            <EditTodoForm  editTodo={editTask} task={todo}/>
        ) : (
            <Todo task={todo} 
        key={index.id}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}/>
        ))
        : null
      ))}

      {/* <p>Completed Tasks</p> */}
      {todos.map((todo, index) => (
        todo.completed ? 
        (todo.isEditing ? (
            <EditTodoForm  editTodo={editTask} task={todo}/>
        ) : (
            <Todo task={todo} 
        key={index.id}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}/>
        ))
        : null
      ))}
      </div>
    </div>
  )
}

export default TodoWrapper