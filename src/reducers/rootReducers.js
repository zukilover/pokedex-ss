/**
 * Created by herisetiawan on 2/16/17.
 */
import { combineReducers } from 'redux';
import {
  pokemonReducer as pokemons,
  pokemonDetailsReducer as details,
  pokemonDetailReducer as detail,
  pokemonSpecReducer as spec,
  loadParamsReducer as loadParams
} from './pokemonReducer';

const rootReducer = combineReducers({
  pokemons,
  details,
  detail,
  spec,
  loadParams
});

export default rootReducer;
