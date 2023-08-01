import React from 'react'
import './TodoInput.css'

function TodoInput(props) {
  const onChangeHandler = (e) => {
    let inputValue = {e.target.value};
  };
  props.onAddTodo(inputValue)
  return (
    <>
      <div className="input-group mb-3">
        <input onChange={onChangeHandler} type="text" className="form-control" placeholder="Enter the new task" aria-label="Recipient's username" aria-describedby="button-addon2" />
      </div>
    </>
  );
}


export default TodoInput
