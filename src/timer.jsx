import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Timer() {
    const [time, setTime] = useState(60);
    useEffect(() => {
        if (time > 0) {
            const timer = setTimeout(() => setTime(time - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [time])
    return (
        <div>Time : {time}</div>
    )
}

export default Timer