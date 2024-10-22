import React, { useContext, useState } from "react";

// Step 1: Create the context
const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    // Step 2: Use the correct Provider
    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Step 3: Create a custom hook to use the ThemeContext
const useTheme = () => {
    return useContext(ThemeContext);
};

export { useTheme, ThemeProvider };