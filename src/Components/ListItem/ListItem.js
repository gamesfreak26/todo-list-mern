import React from 'react'
import './ListItem.css'

const ListItem = ({handleChange, item}) => {
    return(
        <div>
            <li>
                <div>
                    <input
                        type="checkbox"
                        onChange={handleChange}
                    />
                    {item}
                    <button>Delete item</button>
                </div>
            </li>
            
        </div>
    )
}

export default ListItem