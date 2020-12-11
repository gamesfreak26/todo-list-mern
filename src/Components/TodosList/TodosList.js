import React, { useEffect } from 'react'
import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListItem from '../ListItem/ListItem'
import {getList, addItem} from '../../Services/listServices'

const TodosList = () => {

    function fetchList() {
        getList().then((listData) => {
            console.log(listData)
            setItemsList(listData)
        }).catch((error) => {
          console.log("An error occurred fetching blog posts from the server:", error) 
        })
      }
    
      useEffect(() => {
        fetchList()
      },[])


    // Set the states of the List of Items and the Item
    const [itemsList, setItemsList] = useState([])
    const [item, setItem] = useState('');

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

	const deleteItem = (itemId) => {

        // Filter the list to remove the item that you are deleting
        let updatedList = itemsList.filter((item) => {
            return item._id !== itemId
        })
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
				{itemsList.map((listItem, index) => (
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