import React, { useState } from 'react'
import Nav from './Components/Nav/Nav'
import TodosList from './Components/TodosList/TodosList'
import './App.css';

const App = () => {

  var count = 0

  
  // An item in listItems should have an id and a label.  

  function completeHandler() {
    console.log(`Checkbox Clicked`)
  }



  return (
    <div >
      <Nav />
      <h1>Todo List</h1>
      <p>Please add to-dos item(s) through the input field</p>

      <TodosList handleChange={completeHandler} />
      
    </div>
  )
}

export default App
