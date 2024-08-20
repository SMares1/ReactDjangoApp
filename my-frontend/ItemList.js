import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = () => {
    const[items, setItems] = useState([]);

    useEffect(() => {
        axios.get('/api/items/')
        .then(response => {
            setItems(response.data);
        })
        .catch(error => {
            console.error('There was an error retrieving the items!', error);
        });
    }, []);

    return (
        <div>
            <h1>Items List:</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}: {item.description}</li>
                ))}
            </ul>
        </div>
    )
}
export default ItemList;