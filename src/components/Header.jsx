import React, { useState, useContext } from "react";
import ThemeContext from "../hooks/context/ThemeContext";

const Header = () => {
  // DarkMode
  // UseState v a manejar nuestro estado, destructurarmos dos elementos, primero es el estado y la segunda es la función que va a cambiar este estado, se le pasa como estado inicial false
  const [darkMode, setDarkMode] = useState(false);

  // UseContext
  const theme = useContext(ThemeContext);

  // Nos cambia de dark a Light mode
  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className="Header"
      style={{ background: theme.background, color: theme.foreground }}
    >
      <h1>Hooks</h1>
      <button type="button" onClick={handleClick}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </button>

      {/* Otra forma de hacer lo mismo es */}

      <button type="button" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default Header;
