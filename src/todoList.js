import React from 'react';
import ToDo from './ToDo';

export default function todoList({ toDos, completer }) {
  return (
          toDos.map(todo => {
            return <ToDo key={todo.id} completer={completer} todo ={todo}  />
          })
          
  )
}
