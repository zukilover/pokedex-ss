/**
 * Created by herisetiawan on 2/16/17.
 */
import { combineReducers } from 'redux';
import {
  pokemonReducer as pokemons
} from './pokemonReducer';

const rootReducer = combineReducers({
  pokemons
});

export default rootReducer;
