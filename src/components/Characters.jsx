import React, { useState, useEffect, useReducer } from "react";

// Creamos un estado inicial
const initialState = {
  favorites: [],
};

// creamos el reducer que es el que se encargar de agregarlo
const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    default:
      return state;
  }
};

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  // Se le pasan dos parametros, el primero será una funcion anonima y el segundo una variable que estará escuchando en base a los cambios
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };
  console.log(favorites);
  return (
    <div className="Characters">
      {favorites.favorites.map((favorite) => (
        <li key={favorite.id}>{favorite.name}</li>
      ))}

      {characters.map((character) => (
        <div className="item" key={character.id}>
          <h2>{character.name}</h2>
          <button type="button" onClick={() => handleClick(character)}>
            Agregar a favoritos
          </button>
        </div>
      ))}
    </div>
  );
};

export default Characters;
