import React from 'react'
import { ACTIONS } from './App'


export default function Todo(todo, dispatch) {
  return (
    <div>
        <span style={{color: todo.complete?'gray':'black'}}>
            {todo.name} 
            <button onClick={()=>dispatch({type:ACTIONS.COMPLETED,payload:{id:todo.id}})}>completed</button>
            <button> delete</button>
        </span>
    </div>
  )
}
