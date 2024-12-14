import React from "react";
import PokemonList from "./components/PokemonList";

const App = () => {
  return (
    <div className="todo">
      <h1 className="titulo">Pokémon Gallery</h1>
      <PokemonList />
    </div>
  );
};

export default App;
