"use client"
import React, { useState } from 'react'

export default function TodoList() {
    const [input, setInput] = useState('');
    const [savedMessages, setSavedMessages] = useState([]);

    const handleSave = () => {
        if (input.trim() !== '') { // Ensure the input is not empty
            setSavedMessages((previousMessage) => [...previousMessage, input]);
            setInput(''); // Clear the input after saving
        }
    }

    return (
        <div>
            <input 
                type="text" 
                value={input} // Bind input value to state
                onChange={(e) => setInput(e.target.value)} 
                placeholder='Add a task' 
            />
            <button onClick={handleSave}>Add New Task</button>

            <ul>
                {savedMessages.map((message, index) => (
                    <li key={index}>{message}</li> // Add key for each item
                ))}
            </ul>
        </div>
    )
}