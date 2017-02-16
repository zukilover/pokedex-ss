/**
 * Created by herisetiawan on 2/16/17.
 */
import pokemonApi from '../api/pokemonApi';
import * as types from './actionTypes';

export function loadPokemons() {
  return function(dispatch) {
    return pokemonApi.getAllPokemons().then(response => {
      dispatch(loadPokemonsSuccess(response));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadPokemonDetail(name) {
  return function(dispatch) {
    return pokemonApi.getPokemonDetail(name).then(response => {
      dispatch(loadPokemonDetailSuccess(response));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadPokemonsSuccess(response) {
  return {
    type: types.LOAD_POKEMONS_SUCCESS,
    response
  };
}

export function loadPokemonDetailSuccess(response) {
  return {
    type: types.LOAD_POKEMON_DETAILS_SUCCESS,
    response
  };
}
