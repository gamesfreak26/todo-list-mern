import React, { useEffect } from 'react'
import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListItem from '../ListItem/ListItem'

const TodosList = ({handleChange}) => {

    const [listItems, setListItems] = useState([])

    function addItemOnBtnClick() {
        
    }   

    const [itemInList, setItemInList] = useState('');

    const submitValue = (event) => {
        event.preventDefault()
        const frmdetails = {
            'Item' : itemInList, 
        }
        setListItems([itemInList,...listItems])
        console.log(frmdetails);
	}

	const deleteItem = (itemIndex) => {
		let updatedList = [...listItems]
		updatedList.splice(itemIndex,1)
		setListItems(updatedList)
	}
	
	const changeHandler = (event) => {
		setItemInList(event.target.value)
	}

    return(
        <div>
            <form onSubmit={submitValue}>
                <input type="text" placeholder="todo..." onChange={changeHandler} value={itemInList}></input>
                <Button className="addButton"  onClick={submitValue}>Add List Item</Button>
            </form>
            
            <ul>
				{listItems.map((listItem, index) => (
					<ListItem key={index} item={listItem} deleteItem={deleteItem}/>
				))}
            </ul>
        </div>
    )
}

export default TodosList