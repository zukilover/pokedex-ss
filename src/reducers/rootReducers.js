/**
 * Created by herisetiawan on 2/16/17.
 */
import { combineReducers } from 'redux';
import {
  pokemonReducer as pokemons,
  pokemonDetailsReducer as details,
  pokemonDetailReducer as detail,
  pokemonSpecReducer as spec
} from './pokemonReducer';

const rootReducer = combineReducers({
  pokemons,
  details,
  detail,
  spec
});

export default rootReducer;
