/**
 * Created by herisetiawan on 2/16/17.
 */
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export function pokemonReducer(state = initialState.pokemons, action) {
  switch(action.type) {
    case types.LOAD_POKEMONS_SUCCESS:
      return action.response.results
    default:
      return state;
  }
}
