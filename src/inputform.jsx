import React, { useState } from 'react'

function Inputform() {
    const [input, setInput] = useState('');
    return (
        <div>
            <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
            <span>Input : {input}</span>
        </div>
    )
}

export default Inputform