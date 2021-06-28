import React, { useState } from "react";

const ThemeContext = React.createContext({});

export function ThemeContextProvider({ children }) {
  const [theme, toggleTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
