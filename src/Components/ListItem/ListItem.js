import React, {useState} from 'react'
import {Item, StrikedItem} from '../Styled'
import './ListItem.css'


const ListItem = ({key, item, deleteItem}) => {
	const [checked, setChecked] = useState(false)
	const handleChange = (event) => {
		console.log("checked:", event.target.checked)
		setChecked(event.target.checked)
	}

    return(
        <div>
            <li>
                <div>	
                    <input
                        type="checkbox"
						onChange={handleChange}
						value={checked}
                    />
					{checked ? <StrikedItem color="blue">{item}</StrikedItem> : <Item>{item}</Item>}
                    <button onClick={() => deleteItem(key)}>Delete item</button>
                </div>
            </li>
            
        </div>
    )
}

export default ListItem