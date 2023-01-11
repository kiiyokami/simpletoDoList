import React, { useState , useRef, useEffect} from 'react';
import ToDoList from './todoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'ToDoApp.toDos'

function App() {
  const [toDos, setToDos] = useState([])
  const toDoName = useRef()

  function completer(id){
    const newToDos = [...toDos]
    const toDo = newToDos.find(toDo => toDo.id === id)
    toDo.complete = !toDo.complete
    setToDos(newToDos)
  }
  
  useEffect(() => {
    const storedToDos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedToDos) setToDos(storedToDos)
  }, [])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toDos))
  }, [toDos])

  function clearToDos(){
    const newToDos = toDos.filter(todo => !todo.complete) 
    setToDos(newToDos)
    localStorage.clear(LOCAL_STORAGE_KEY);
  }

  function addToList(e){
    const name = toDoName.current.value
    if (name === '') return
    setToDos(prevTodos =>{
      return [...prevTodos, {id: uuidv4(),name:name,complete:false}]
    })
    toDoName.current.value = null
  }

  return (
    <>
      <h1>To Do List</h1>
      <ToDoList toDos ={toDos} completer={completer} />
      <input ref={toDoName} type="text" />
      <button onClick={addToList}>Add to List</button>
      <button onClick={clearToDos}>Clear List</button>
      
    </>
    
  )
}

export default App;
