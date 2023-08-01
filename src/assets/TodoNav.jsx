import React from 'react'

function TodoNav(props) {
  let inputValue = "";
  const onClickAdd = () =>{
    const newTodo = {
      id: crypto.randomUUID(),
      title: inputValue,
  };
    props.onAddTodo(newTodo)
  }

  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" >All</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Completed</a>
        </li>
        <li className="nav-item">
          <button onClick={onClickAdd} type="button" className="btn btn-outline-primary">Add</button>
        </li>
      </ul>

    </>
  )
}

export default TodoNav
