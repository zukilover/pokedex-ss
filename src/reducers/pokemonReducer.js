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

export function pokemonDetailsReducer(state = initialState.details, action) {
  switch(action.type) {
    case types.LOAD_POKEMON_DETAILS_SUCCESS:
      return Object.assign([], state, {
        [action.response.name]: action.response
      });
    default:
      return state;
  }
}

export function pokemonDetailReducer(state = initialState.detail, action) {
  switch(action.type) {
    case types.SET_POKEMON_DETAIL:
      return Object.assign({}, state, action.detail);
    default:
      return state;
  }
}

export function pokemonSpecReducer(state = initialState.spec, action) {
  switch(action.type) {
    case types.GET_POKEMON_SPEC:
      return Object.assign({}, state, {
        isFetching: true
      });
    case types.GET_POKEMON_SPEC_SUCCESS:
      return Object.assign({}, state, action.spec, {
        isFetching: false
      });
    default:
      return state;
  }
}
