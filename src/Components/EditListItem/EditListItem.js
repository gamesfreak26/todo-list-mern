import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const EditListItem = ({item, editListItem}) => {

    const [itemLabel, setItemLabel] = useState(item.label);

    // When typing the value into the input field, set the state of item.
	const changeHandler = (event) => {
		setItemLabel(event.target.value)
	}

    return(
        <div>
            <form onSubmit={() => editListItem(item._id, itemLabel)}>
                <input id='test' value={itemLabel} onChange={changeHandler} type="text"/>
                
            </form>
        </div>
    )
}

export default EditListItem