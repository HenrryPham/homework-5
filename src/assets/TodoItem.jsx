import React from 'react'
import './TodoItem.css'

function TodoItem() {
  return (
    <>
      <div className="d-flex todoItem">
        <div className="form-check" >
          <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Todo 1
          </label>
        </div>
        <div>
          <button type="button" className="btn btn-outline-dark">Delete</button>
        </div>
      </div>

      <div className="d-flex todoItem">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Todo 2
          </label>
        </div>
        <button type="button" className="btn btn-outline-dark">Delete</button>
      </div>
    </>
  )
}

export default TodoItem
