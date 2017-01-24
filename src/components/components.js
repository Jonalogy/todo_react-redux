import React, { Component } from 'react'

export const Todo = (props) => {
  const { todo } = props;
  if(todo.isDone) { return <strike>{todo.text}</strike>; }
    else { return <span>{todo.text}</span>; }
}

export const TodoList = (props) => {
  const { todos } = props;
  return (
    <div className='todo'>
      <h3>TodoList</h3>
      <input type='text' placeholder='Add todo' />
      <ul className='todo__list'>
        { todos.map( (t) => {
          return(
            <li key={t.id} className='todo__item'>
              <Todo todo={t} />
            </li>
          )
        } ) }
      </ul>
    </div>
  );
}
