import React from 'react'
import './ListItem.css'

const ListItem = ({handleChange}) => {
    return(
        <div>
            <li>
                <div>
                    <input
                        type="checkbox"
                        onChange={handleChange}
                    />
                    <input placeholder="Item" />
                    <button>Delete item</button>
                </div>
            </li>
            
        </div>
    )
}

export default ListItem