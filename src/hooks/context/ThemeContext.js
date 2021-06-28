import React, {useState} from 'react';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};


const ThemeContext = React.createContext(themes.light)

export function ThemeContextProvider({children}) {

  return (
    <ThemeContext.Provider value={themes.dark}>
    {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext