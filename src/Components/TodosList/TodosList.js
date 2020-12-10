import React from 'react'
import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListItem from '../ListItem/ListItem'

const TodosList = ({handleChange}) => {

    const [listItems, setListItems] = useState([])

    function addItemOnBtnClick() {
        setListItems(listItems.concat(<ListItem key={listItems.length} handleChange={handleChange} />))
    }

    return(
        <div>
            <Button className="addButton" onClick={addItemOnBtnClick}>Add List Item</Button>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default TodosList