import React, {useState} from 'react'
import './ListItem.css'

import DisplayListItem from '../DisplayListItem/DisplayListItem';
import EditListItem from '../EditListItem/EditListItem';
import Button from 'react-bootstrap/Button';


const ListItem = ({item, deleteItem, editListItem}) => {

    const [editFlag, setEditFlag] = useState(false)

    const editItem = (itemId) => {

        setEditFlag(!editFlag)

        console.log(`Edit Item: ${editFlag}`)
    }

    return(
        <li>
            <div>
                {editFlag ? 
                    <EditListItem 
                        item={item} 
                        editListItem={editListItem}
                    /> 
                    : 
                    <DisplayListItem 
                        item={item} 
                        deleteItem={deleteItem} 
                        editItem={editItem}
                    />
                }
                {!editFlag && <Button variant="primary" onClick={() => editItem(item._id)}>Edit</Button>}
                <Button variant="outline-danger" onClick={() => deleteItem(item._id)}>Delete item</Button>
                {editFlag && <Button 
                    variant="danger" 
                    onClick={() => {
                        setEditFlag(!editFlag)
                        editListItem(item._id, item.label)
                    }    
                }>Save</Button>}
            </div>
        </li>
    )
}

export default ListItem