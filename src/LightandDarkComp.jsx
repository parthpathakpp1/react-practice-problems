import React from 'react'
import { useTheme } from './context/ThemeContext'
import './styles/lightdark.css'

function LightandDarkComp() {
    const { isDarkMode } = useTheme();
    const themeClass = isDarkMode ? 'dark-theme' : 'light-theme';
    return (
        <div className={`container ${themeClass}`}>
            <p>This component uses selected theme</p>
        </div>
    )
}

export default LightandDarkComp