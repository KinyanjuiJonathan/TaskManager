
import React from "react";
import { useReducer, useState } from "react";
import'./App.css'
import Todo from "./Todo";

export const ACTIONS= {
  ADD_Desc:'add_desc'
}

function reducer(todos,action){
    switch (action.type){
      case ACTIONS.ADD_Desc:
        return[ ...todos, newDesc(action.payload.desc)]
      case ACTIONS.COMPLETE:
        return todos.map(todo=>{
          if(todo.id===action.payload.id){
            return{...todo,complete:!todo.complete}
          }
          return todo
        })
    }
}
function newDesc(desc){
  return{id:Date.now(),desc:desc, complete:false}
}


function App() {
  const [todos, dispatch]=useReducer(reducer,[])
  const [desc, setDesc]=useState('')

  function handleSubmit(e){
    e.preventDefault()
    dispatch({type: ACTIONS.ADD_Desc,payload:{desc:desc}})
    setDesc('')
  }

  return (
   <div className="App">
    <form  onSubmit={handleSubmit}>
      <div className="Container">
        <input placeholder=" Task Description" value={desc} onChange={e=>setDesc(e.target.value)}/>
        <input placeholder="From  [Agent]"/>
        <input placeholder="start time " />
        <input placeholder="duration"/>
        <input placeholder="cost"/>
      </div>
     </form>
     {todos.map(todo=>{
     return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
     })}
   </div>
  );
}

export default App;
