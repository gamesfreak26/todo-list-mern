import React from 'react'
import ListItem from './Components/ListItem/ListItem'
import Nav from './Components/Nav/Nav'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <div >
      <Nav />
      <h1>Todo List</h1>

      <Button className="addButton">Add List Item</Button>

      <ListItem />
    </div>
  )
}

export default App
