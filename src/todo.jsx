import React, { useState } from 'react';

function Todo() {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (input.trim() !== '') { // Changed to strict inequality
            setTodos([...todos, input]); // Fixed array spreading
            setInput('');
        }
    }

    const removeTodo = (index) => {
        const updatedTodo = todos.filter((_, i) => i !== index); // Changed to strict inequality
        setTodos(updatedTodo);
    }

    return (
        <div>
            <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addTodo}>Add</button>
            <ul>
                {
                    todos.map((todo, index) => ( // Added parentheses to return the <li>
                        <li key={index}>
                            {todo}
                            <button onClick={() => removeTodo(index)}>Remove</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Todo;