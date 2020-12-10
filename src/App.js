import React, { useState } from 'react'
import Nav from './Components/Nav/Nav'
import TodosList from './Components/TodosList/TodosList'
import './App.css';

const App = () => {

  const [listItem, setListItem] = useState([])

  function completeHandler() {
    console.log(`Checkbox Clicked`)
  }

  return (
    <div >
      <Nav />
      <TodosList handleChange={completeHandler} />
      
    </div>
  )
}

export default App
