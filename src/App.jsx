import { useState } from 'react'
import TodoHeader from './assets/TodoHeader'
import TodoNav from './assets/TodoNav'
import TodoInput from './assets/TodoInput'
import TodoListItem from './assets/TodoListItem'
import './App.css'
import './assets/TodoInput.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Todo 1",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Todo 2",
      isCompleted: true,
    }
  ])
  const onAddTodo = (newTodo) => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };
console.log(todos)
  return (
    <>
    <div className="todoList">
      <TodoHeader />
      <TodoInput onAddTodo={onAddTodo}/>
      <TodoNav onAddTodo={onAddTodo}/>
      <TodoListItem />
    </div>
    </>
  )
}

export default App
