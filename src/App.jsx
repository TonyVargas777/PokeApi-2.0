import React from "react";
import PokemonList from "./components/PokemonList";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "20px" }}>Pokémon Gallery</h1>
      <PokemonList />
    </div>
  );
};

export default App;
