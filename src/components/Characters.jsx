import React, { useState, useEffect, useReducer, useMemo } from "react";

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

  // Este Hook nos va a almacenar la búsqueda
  const [search, setSearch] = useState("");

  // Se le pasan dos parametros, el primero será una función anónima y el segundo una variable que estará escuchando en base a los cambios
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  // Nos detecta los valores en el input
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Filtro
  // const filteredUsers = characters.filter((user) => {
  //   return user.name.toLowerCase().includes(search.toLowerCase());
  // });

  // Filtro con Use Memo

  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  return (
    <div className="Characters">
      {favorites.favorites.map((favorite) => (
        <li key={favorite.id}>{favorite.name}</li>
      ))}

      <div>
        <label>
          Búsqueda:
          <input
            name="search"
            type="text"
            value={search}
            onChange={handleSearch}
          ></input>
        </label>
      </div>

      {filteredUsers.map((character) => (
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
