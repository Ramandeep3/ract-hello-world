import React, { useState } from 'react';

const TodoForm = (props) => {
  const[newTodo,setTodo]=useState("")
  return (
  <form className="todo-form"
   onSubmit={event=> {
    event.preventDefault();
    props.addTodo(newTodo)}
   }>
  <input
  type="text" 
  value={newTodo} onChange={event=>{(event.target.value)}} ></input>
  <button>Submit todo</button>
  </form>
  )
}

const TodoList = (props) => {
  return <div className="todo-list">
    {props.todos.map((todo,index)=><p key ={index}>{todo}</p>)}
  </div>
}

const Todo = (props) => {
  const [todos,setTodos]=useState([])
  const addTodo = todo => {
    const newTodos=[...todo,todo]
    setTodos(newTodos)

    // make a copy of todoList, you could use let copy = [...todoList], or any other method
    // push todo into the copy
    // call setTodoList with the copy
    console.log(todos)
  }


  return <div className="todo">
    <TodoForm addTodo={addTodo} />
    <TodoList  todos={todos}/>
  </div>
}

export default Todo;