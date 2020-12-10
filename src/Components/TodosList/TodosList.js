import React, { useEffect } from 'react'
import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListItem from '../ListItem/ListItem'

const TodosList = () => {

    // Set the states of the List of Items and the Item
    const [ItemsList, setItemsList] = useState([])
    const [item, setItem] = useState('');

    // When user presses enter to submit form or clicks on button, add the item to the list.
    const submitValue = (event) => {
        event.preventDefault()
        setItemsList([item,...ItemsList])
        // Add Item to backend
	}

	const deleteItem = (itemIndex) => {
		let updatedList = [...ItemsList]
		updatedList.splice(itemIndex,1)
        setItemsList(updatedList)
        // Delete Item from backend
	}
    
    // When typing the value into the input field, set the state of item.
	const changeHandler = (event) => {
		setItem(event.target.value)
	}

    return(
        <div>
            <form onSubmit={submitValue}>
                <input 
                    type="text" 
                    placeholder="todo..." 
                    onChange={changeHandler} 
                    value={item}
                />
                <Button className="addButton"  onClick={submitValue}>Add List Item</Button>
            </form>
            
            <ul>
				{ItemsList.map((listItem, index) => (
                    <ListItem 
                        key={index} 
                        item={listItem} 
                        deleteItem={deleteItem}
                    />
				))}
            </ul>
        </div>
    )
}

export default TodosList