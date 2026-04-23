import { TYPES } from "./pokemonActions";

export function pokemonReducer(state, action){
    switch(action.type){
        case TYPES.READ_STATE: {
            const { pokemons } = action.payload;

            return {
                ...state,
                pokemons,
            };
        }
    
    default:
        return state;
    }
}