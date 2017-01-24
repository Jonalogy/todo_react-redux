import React from 'react'
import ReactDOM from 'react-dom'
import { TodoList } from './components/components'
import dummyTodos from './dummyData.js'

console.log("DummyData : ", dummyTodos)

ReactDOM.render(
  <TodoList todos={ dummyTodos }/>, document.getElementById("App")
)
