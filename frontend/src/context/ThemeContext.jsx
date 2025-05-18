import { createContext, useContext, useState } from "react";


const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const[themeAppearance, setThemeAppearance] = useState('light')

    return(
        <ThemeContext.Provider value={{themeAppearance, setThemeAppearance}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext)