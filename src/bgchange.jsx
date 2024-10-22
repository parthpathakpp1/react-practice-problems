import React, { useState } from 'react'

function BgChange() {
    const [backgroundColor, setBackgroundColor] = useState('red')

    const change = () => {
        const newColor = backgroundColor === 'red' ? 'blue' : 'red';
        setBackgroundColor(newColor);
    }
    return (
        <div onClick={change} style={{
            backgroundColor,
            width: '200px',
            height: '200px',
            cursor: 'pointer'
        }}

        >
            Click me to change the bgColor
        </div>
    )
}

export default BgChange