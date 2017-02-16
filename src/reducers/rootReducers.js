/**
 * Created by herisetiawan on 2/16/17.
 */
import { combineReducers } from 'redux';
import {
  pokemonReducer as pokemons,
  pokemonDetailsReducer as details
} from './pokemonReducer';

const rootReducer = combineReducers({
  pokemons,
  details
});

export default rootReducer;
