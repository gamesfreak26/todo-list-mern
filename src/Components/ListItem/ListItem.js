import React, {useState} from 'react'
import {Item, StrikedItem} from '../Styled'
import './ListItem.css'
import Button from 'react-bootstrap/Button';


const ListItem = ({item, deleteItem}) => {
	const [checked, setChecked] = useState(false)
	const handleChange = (event) => {
		console.log("checked:", event.target.checked)
		setChecked(event.target.checked)
	}

    return(
        <div>
            <li>
                    <input 
                        type="checkbox"
						onChange={handleChange}
						value={checked}
                    />
					{checked ? <StrikedItem color="blue">{item.label}</StrikedItem> : <Item>{item.label}</Item>}
                    <Button variant="outline-danger" onClick={() => deleteItem(item._id)}>Delete item</Button>
            
            </li>
            
        </div>
    )
}

export default ListItem