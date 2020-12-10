import React, { useState } from 'react'
import Nav from './Components/Nav/Nav'
import TodosList from './Components/TodosList/TodosList'
import './App.css';

const App = () => {

  // An item in listItems should have an id and a label.  
  function completeHandler() {
    console.log(`Checkbox Clicked`)
  }

  return (
    <div >
      <Nav />
      <h1>Todo List</h1>
      <p>Please add to-dos item(s) through the input field</p>

      <TodosList />
      
    </div>
  )
}

export default App
