import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListItem from '../ListItem/ListItem'

const TodosList = ({handleChange}) => {
    return(
        <div>
            <h1>Todo List</h1>
            <p>Please add to-dos item(s) through the input field</p>
            <Button className="addButton">Add List Item</Button>

            <ul>
                <ListItem handleChange={handleChange} />
                <ListItem handleChange={handleChange}/>
            </ul>
        </div>
    )

    
}

export default TodosList