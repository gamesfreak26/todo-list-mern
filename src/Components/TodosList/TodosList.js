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
        setListItems(listItems.concat(<ListItem key={listItems.length} handleChange={handleChange} item={itemInList} />))
        console.log(frmdetails);
    }

    return(
        <div>
            <form>
                {/* Todo: figure out why pressing enter refreshes the page */}
                <input type="text" placeholder="todo..." onChange={e => setItemInList(e.target.value)}></input>
                <Button className="addButton"  onClick={submitValue}>Add List Item</Button>
            </form>
            
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default TodosList