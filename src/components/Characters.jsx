import React, { useState, useEffect } from "react";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  // Se le pasan dos parametros, el primero será una funcion anonima y el segundo una variable que estará escuchando en base a los cambios
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="Characters">
      {characters.map((character) => (
        <h2>{character.name}</h2>
      ))}
    </div>
  );
};

export default Characters;
