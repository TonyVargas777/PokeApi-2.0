import React, { useEffect, useState, useRef } from "react";
import { getPokemons, getPokemonData } from "../api/api";
import PokemonCard from "./PokemonCard";
import "../Styles/App.css";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const listRef = useRef(null); // Referencia al contenedor para controlar el scroll

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await getPokemons(500, 0); // Cambia aquí el límite si necesitas más cartas
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
    };
    fetchPokemons();
  }, []);

  // Función para desplazar horizontalmente
  const scrollList = (direction) => {
    const container = listRef.current;
    const scrollAmount = container.offsetWidth * 1; // Desplazamiento proporcional al ancho del contenedor
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="carousel-buttons">
        <button className="button_left" onClick={() => scrollList("left")}>
          Left
        </button>
        <div className="pokemon-list" ref={listRef}>
          {pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.front_default}
              type={pokemon.types[0].type.name}
            />
          ))}
        </div>
        <button className="button_right" onClick={() => scrollList("right")}>
          Right
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
