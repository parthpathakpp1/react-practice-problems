import React from 'react'
import { useTheme } from './context/ThemeContext'

function LightandDark() {
    const { isDarkMode, toggleTheme } = useTheme();
    return (
        <div>
            <label>
                <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
                Dark Mode
            </label>
        </div>
    )
}

export default LightandDark