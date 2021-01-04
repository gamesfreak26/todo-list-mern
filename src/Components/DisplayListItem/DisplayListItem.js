import React, {useState} from 'react'
import {Item, StrikedItem} from '../Styled'

const DisplayListItem = ({item}) => {

    const [checked, setChecked] = useState(false)
	const handleChange = (event) => {
		console.log("checked:", event.target.checked)
		setChecked(event.target.checked)
    }
    
    return(
        <div>
            <input 
                type="checkbox"
                onChange={handleChange}
                value={checked}
            />
            {checked ? <StrikedItem color="blue">{item.label}</StrikedItem> : <Item>{item.label}</Item>}
        </div>
    )
}

export default DisplayListItem