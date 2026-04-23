import React, { useContext } from "react";
import { PokemonCartContext } from '../../../context/pokemonContextProvider';

const Pokemons = () => {

  const { state } = useContext(PokemonCartContext);
  const { pokemons } = state;

  return (
    <>
      <div className="pokemonsContainer">
        <h1>Lista de Pokémons</h1>

        <ul>
          {pokemons.map((pokemon, index) => (
            <li key={index}>
              <strong>{pokemon.name}</strong> - {pokemon.url}
              {/*<strong>{pokemon.name}</strong> - ID: {pokemon.id} - Altura: {pokemon.height} - Peso: {pokemon.weight}*/}
            </li>
          ))}
        </ul>
          
      </div>
    </>
  )
}

export default Pokemons