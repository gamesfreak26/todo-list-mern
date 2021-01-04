import React, {useState} from 'react'
import './ListItem.css'
import Button from 'react-bootstrap/Button';
import DisplayListItem from '../DisplayListItem/DisplayListItem';
import EditListItem from '../EditListItem/EditListItem';


const ListItem = ({item, deleteItem}) => {

    const [editFlag, setEditFlag] = useState(false)

    const editItem = (itemId) => {

        setEditFlag(editFlag => !editFlag)

        console.log(`Edit Item: ${editFlag}`)
        // editOneitem(itemId)
        //     .then(() => {
        //         let listItem = itemsList.filter((item) => {
        //             return item._id === itemId
        //         })
        //     })
    }

    return(
        <li>
            <div>
                {editFlag ? <EditListItem /> : <DisplayListItem item={item} />}
                <Button variant="primary" onClick={() => editItem(item._id)}>Edit</Button>
                <Button variant="outline-danger" onClick={() => deleteItem(item._id)}>Delete item</Button>
            </div>
            <div >
                
            </div>
        </li>
    )
}

export default ListItem