import { createContext, useReducer, useEffect } from "react";
import { pokemonInitialState } from "../reducer/pokemonInitialState";
import { pokemonReducer } from "../reducer/pokemonReducer";
import { TYPES } from "../reducer/pokemonActions";
import axios from "axios";

export const PokemonCartContext = createContext();

const PokemonContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pokemonReducer, pokemonInitialState);

  const readState = async () => {
    const ENDPOINTS = {
      pokemons: "https://pokeapi.co/api/v2/pokemon/",
    };

    const pokemonsResponse = await axios.get(ENDPOINTS.pokemons);

    const pokemons = pokemonsResponse.data.results;

    //const pokemonsDetalle = [];

    for (const pokemon of pokemons) {
          const resDetalle = await axios.get(pokemon.url);
          const detalle = resDetalle.data;
          console.log(`Pokemon ${detalle.id}:`, detalle);
          //pokemonsDetalle.push(detalle);
    }

    dispatch({ type: TYPES.READ_STATE, payload: { pokemons /*pokemons: pokemonsConDetalle*/} });
  };

  useEffect(() => {
    readState();
  }, []);

  

  const value = {
    state,
    readState,
  };

  return (
    <PokemonCartContext.Provider value={value}>
      {children}
    </PokemonCartContext.Provider>
  );
};

export default PokemonContextProvider;