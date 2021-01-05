import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListItem from '../ListItem/ListItem'
import {getList, addItem, deleteOneItem, editOneitem} from '../../Services/listServices'

const TodosList = () => {

    // Set the states of the List of Items and the Item
    const [itemsList, setItemsList] = useState([])
    const [item, setItem] = useState('');

    // Get all items in the list
    function fetchList() {
        getList().then((listData) => {
            setItemsList(listData)
        }).catch((error) => {
          console.log("An error occurred fetching the todo list items:", error) 
        })
      }
    
      useEffect(() => {
        fetchList()
      },[])

    // When user presses enter to submit form or clicks on button, add the item to the list.
    const submitValue = (event) => {
        event.preventDefault()
        
        const newItem = {
            label: item,
            username: "Teej",
            completed: false
        }

        // Add Item to backend
        addItem(newItem)
            .then((createdItem) => {
                console.log(createdItem)
                if (createdItem) {
                    setItemsList([createdItem,...itemsList])
                }
                else console.log("No createdItem from server")
            })
            .catch((error) => {
                console.log("Error: ", error.message)
            })
	}

    // delete a list item
	const deleteItem = (itemId) => {
        deleteOneItem(itemId)
            .then(() => {
                // Filter the list to remove the item that you are deleting
                let updatedList = itemsList.filter((item) => {
                    return item._id !== itemId
                })
                setItemsList(updatedList)
            })
            .catch((error) => {
                console.log("Error: ", error.message)
            })
    }

    const editListItem = (itemId, label) => {
        console.log("Save button pressed")
        console.log(itemId)

        editOneitem(itemId)
            .then(() => {
                let listItem = itemsList.find((item) => {
                    return item._id === itemId
                })
                console.log(`listItem: ${listItem}`)

                listItem.label = label
                setItemsList(itemsList)
            })
            .catch((error) => {
                console.log("Error: ", error.message)
            })
            

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
				{itemsList.map((listItem, index) => (
                    <ListItem 
                        key={index} 
                        item={listItem} 
                        deleteItem={deleteItem}
                        editListItem={editListItem}
                    />
				))}
            </ul>
        </div>
    )
}

export default TodosList