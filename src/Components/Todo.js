import React, { useState } from 'react';

export default function Todo() {
    const [items, setItems] = useState([]); 
    const [itemName, setItemName] = useState('');

    const handleChange = (e) => {
        setItemName(e.target.value);
    };

    const handleAddItem = () => {
        if (itemName.trim() === '') return;

        const newItem = {
            name: itemName,
            color: 'gray', 
        };

        setItems([...items, newItem]);
        setItemName('');
    };

    const handleDeleteItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };

    return (
        <div style={{ padding: '10px' }}>
            <h3 className='blink' style={{textShadow:'3px 3px 3px red'}}>TODO LIST</h3>
            <div style={{ 
                border: '3px solid black', 
                display: 'flex', 
                justifyContent: 'space-between', 
                margin: '0 auto',
                maxWidth: '600px',
                padding: '10px', 
                borderRadius: '15px',
            }}>
                <input
                    type="text"
                    name="txt"
                    id="txt"
                    placeholder='Add item to be added'
                    style={{ padding: '10px', background: 'black', color: 'white', marginRight: '10px', borderRadius: '15px', flex: 1 }}
                    value={itemName}
                    onChange={handleChange}
                />
                <button
                    style={{ padding: '10px', background: 'black', color: 'white', borderRadius: '15px' }}
                    type='button'
                    onClick={handleAddItem}
                >Add
                </button>
            </div>
            <div style={{ marginTop: '20px' }}>
                <h4>Items:</h4>
                {items.length === 0 && (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40%', boxSizing: 'border-box' }}>
                        <img src="addHere1.png" alt="Add Item" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                    </div>
                )}
                {items.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: item.color,
                            padding: '10px',
                            margin: '5px 0',
                            borderRadius: '10px',
                            color: 'black',
                            width: '90%', // Make item width responsive
                            maxWidth: '600px', // Set max width for items
                            marginLeft: 'auto', // Center items by auto margins
                            marginRight: 'auto', 
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <span>{item.name}</span>
                        <button
                            style={{ padding: '10px', background: 'black', color: 'white', borderRadius: '15px', cursor: 'pointer' }}
                            onClick={() => handleDeleteItem(index)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
