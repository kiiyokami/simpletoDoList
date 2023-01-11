import React from 'react'

export default function toDo({ todo, completer }) {
    function handleToDoClick(){
        completer(todo.id)
    }
  return (
    <div>
        <label>
            <input type="checkbox" checked={todo.complete} onChange={handleToDoClick}/>
            {todo.name}
        </label>
        
    </div>
  )
}
