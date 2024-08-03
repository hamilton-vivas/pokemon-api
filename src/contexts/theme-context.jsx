import { createContext, useState, useContext } from "react"
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

export const themes = {
    light: {
        background: '#eeeeee',
        text: '#000000',
        link: '#1a73e8',
        listItemBackground: '#f0f0f0',
        moveBackground: '#dcdcdc',
    },
    dark: {
        background: '#181818',
        text: '#ffffff',
        link: '#1a73e8',
        listItemBackground: '#333333',
        moveBackground: '#444444',
    }
}

export const ThemeContext = createContext({})

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider  = ({ children }) => {

    const [ theme, setTheme] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
           <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
        </ThemeContext.Provider>
    )

}
