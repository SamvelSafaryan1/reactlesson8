import { useState } from "react"
import style from './TodoList.module.css'
import AddBtn from "../AddBtn/AddBtn.jsx"

function TodoList(){
    let [todos, setTodos] = useState([])
    let [text, setText] = useState('')

  let addTodo = () => {
    if(text.trim()){
      setTodos((prev) => {
        return [
          ...prev,
          {
            id: Date.now(),
            title: text,
            isDone: false
          }
        ]
      })
      setText('')
    }
  }

  let remove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  let change = (id) => {
    setTodos(todos.map((todo) => {
      if(todo.id === id){
        return {
          ...todo,
          isDone: !todo.isDone
        }
      }
      else{
        return todo
      }
    }))
  }

  let edit = (id) => {
    let newTitle = prompt('Edit your text',
      todos.find(todo => todo.id === id).title)
    if(newTitle && newTitle.trim() !== ''){
      setTodos(todos.map((todo) => {
        if(todo.id === id){
          return {
            ...todo,
            title: newTitle
          }
        }
        return todo
      }))
    }
  }

  return(
      <div className={style.todos}>
        <AddBtn text={text} change={setText} addTodo={addTodo}/>
      {
      todos.map((todo) => {
        return(
          <li key={todo.id}>
            <input 
              type="checkbox" 
              checked={todo.isDone} 
              onChange={() => change(todo.id)}/>
            <span onDoubleClick={() => edit(todo.id)}>{todo.title}</span>
            <button onClick={() => remove(todo.id)}>delete</button>
          </li>
        )
      })
    }
      </div>
  )
}

export default TodoList
